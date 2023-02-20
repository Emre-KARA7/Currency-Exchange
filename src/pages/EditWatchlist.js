import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import pagesStyles from './pages.styles';
import EditWatchlistCard from '../components/EditWatchlistCard';
import {useSelector} from 'react-redux'; //redux
import useStorage from '../hooks/useStorage';
import Watchlist from './Watchlist';

function EditWatchlist() {
  //
  const {StorageLoading, StorageError, storageSet, storageGet} = useStorage();
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  const [arrToWatc, setArrToWatc] = useState(' ');
  const data = [
    {id: 1, name: 'ABD DOLARI', abbrv: 'USD'},
    {id: 2, name: 'AVUSTRALYA DOLARI', abbrv: 'AVD'},
    {id: 3, name: 'DANİMARKA KRONU', abbrv: 'DKR'},
    {id: 4, name: 'EURO', abbrv: 'EUR'},
    {id: 5, name: 'İNGİLİZ STERLİNİ', abbrv: 'STR'},
  ];

  function add(abbrv) {
    setArrToWatc([...arrToWatc, {abbrv}]);
  }
  function remove(abbrv) {
    setArrToWatc(arrToWatc.filter(i => i.abbrv !== abbrv));
  }

  useEffect(() => {
    (async () => {
      if (arrToWatc === ' ') {
        const a = await storageGet('watchlist');
        setArrToWatc(a);
      } else await storageSet('watchlist', arrToWatc);
      console.log(arrToWatc);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrToWatc]);

  return (
    <SafeAreaView
      style={
        darkTheme
          ? pagesStyles.flexOnePaddingBG_dark
          : pagesStyles.flexOnePaddingBG
      }>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <EditWatchlistCard
            name={item.name}
            abbreviation={item.abbrv}
            onPress={isChecked => {
              isChecked ? add(item.abbrv) : remove(item.abbrv);
            }}
          />
        )}
        keyExtractor={item => item.id}
        //item seperator
      />
    </SafeAreaView>
  );
}

export default EditWatchlist;
