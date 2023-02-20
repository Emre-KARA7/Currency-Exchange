import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import pagesStyles from './pages.styles';
import EditWatchlistCard from '../components/EditWatchlistCard';
import {useSelector} from 'react-redux'; //redux
import useStorage from '../hooks/useStorage';

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
        if (a) setArrToWatc(a);
        else setArrToWatc([]);
      } else await storageSet('watchlist', arrToWatc);
      console.log(arrToWatc);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrToWatc]);

  function checkControl(abbrv) {
    if (arrToWatc[0].abbrv) {
      const even = element => element.abbrv === abbrv;
      return arrToWatc.some(even);
    }
    return false;
  }
  if (arrToWatc[0].abbrv) {
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
              onPress={check => {
                check ? add(item.abbrv) : remove(item.abbrv);
              }}
              isChecked={checkControl(item.abbrv)}
            />
          )}
          keyExtractor={item => item.id}
          //item seperator
        />
      </SafeAreaView>
    );
  }
}

export default EditWatchlist;
