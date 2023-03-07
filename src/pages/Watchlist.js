import React, {useState, useCallback, useEffect} from 'react';
import {SafeAreaView, RefreshControl, FlatList} from 'react-native';
import WatchlistCard from '../components/WatchlistCard';
import pagesStyles from './pages.styles';
import {useSelector} from 'react-redux'; //redux
import useStorage from '../hooks/useStorage';
let ws = new WebSocket('ws://192.168.0.15:8080');

function Watchlist({navigation}) {
  //
  const [refreshing, setRefreshing] = useState(false);
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  const {StorageLoading, StorageError, storageSet, storageGet} = useStorage();
  const [arrToWatch, setArrToWatch] = useState(' ');
  const [data, setData] = useState(null);

  ws.onmessage = e => {
    // a message was received
    //console.log(e.data);
    setData(JSON.parse(e.data).arr);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    ws.close();
    ws = new WebSocket('ws://192.168.0.15:8080');
    (async () => {
      setArrToWatch('a');
      const a = await storageGet('watchlist');
      setArrToWatch(a);
    })();
    setRefreshing(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    (async () => {
      if (arrToWatch === ' ') {
        const a = await storageGet('watchlist');
        if (a) setArrToWatch(a);
        else setArrToWatch([]);
      }
      console.log(arrToWatch);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrToWatch]);

  function goToExchangeScreen(abbreviation, exchangeMethod, rate) {
    navigation.navigate('ExchangeScreen', {abbreviation, exchangeMethod, rate});
  }

  return (
    <SafeAreaView
      style={darkTheme ? pagesStyles.flexOne_bg_dark : pagesStyles.flexOne_bg}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={data} //data
        renderItem={({item}) => (
          <WatchlistCard
            name={item.CurrencyName}
            abbreviation={item.abbrv}
            buying={item.ForexBuying}
            onPressBuy={() => {
              goToExchangeScreen(item.abbrv, 'BUY', item.ForexBuying);
            }}
            selling={item.ForexSelling}
            onPressSell={() => {
              goToExchangeScreen(item.abbrv, 'SELL', item.ForexSelling);
            }}
          />
        )}
        keyExtractor={item => item.id}
        //item seperator
      />
    </SafeAreaView>
  );
}

export default Watchlist;
