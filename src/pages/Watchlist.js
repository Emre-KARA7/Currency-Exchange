import React, {useState, useEffect} from 'react';
import {SafeAreaView, RefreshControl, FlatList} from 'react-native';
import WatchlistCard from '../components/WatchlistCard';
import pagesStyles from './pages.styles';
import {useSelector} from 'react-redux'; //redux
import useStorage from '../hooks/useStorage';

function Watchlist({navigation}) {
  //
  const [refreshing, setRefreshing] = useState(false);
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  const {StorageLoading, StorageError, storageSet, storageGet} = useStorage();
  const [arrToWatch, setArrToWatch] = useState(' ');

  const data = [
    {
      id: 1,
      buying: 18.7412,
      selling: 18.8156,
      name: 'ABD DOLARI',
      abbrv: 'USD',
    },
    {
      id: 2,
      buying: 18.7412,
      selling: 18.8156,
      name: 'AVUSTRALYA DOLARI',
      abbrv: 'AVD',
    },
    {
      id: 3,
      buying: 18.7412,
      selling: 18.8156,
      name: 'DANİMARKA KRONU',
      abbrv: 'DKR',
    },
    {id: 4, buying: 18.7412, selling: 18.8156, name: 'EURO', abbrv: 'EUR'},
    {
      id: 5,
      buying: 18.7412,
      selling: 18.8156,
      name: 'İNGİLİZ STERLİNİ',
      abbrv: 'STR',
    },
  ];

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
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
        data={data}
        renderItem={({item}) => (
          <WatchlistCard
            name={item.name}
            abbreviation={item.abbrv}
            buying={item.buying}
            onPressBuy={() => {
              goToExchangeScreen(item.abbrv, 'BUY', item.buying);
            }}
            selling={item.selling}
            onPressSell={() => {
              goToExchangeScreen(item.abbrv, 'SELL', item.selling);
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
