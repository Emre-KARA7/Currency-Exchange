import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import pagesStyles from './pages.styles';
import EditWatchlistCard from '../components/EditWatchlistCard';
import {useSelector} from 'react-redux'; //redux
import useStorage from '../hooks/useStorage';
import InfoCard from '../components/InfoCard';
import {useTranslation} from 'react-i18next'; //i18n

function EditWatchlist({navigation}) {
  //
  const {StorageLoading, StorageError, storageSet, storageGet} = useStorage();
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  const {t} = useTranslation(); //i18n
  const [arrToWatch, setArrToWatch] = useState(' ');
  const data = [
    {id: 1, name: 'ABD DOLARI', abbrv: 'USD'},
    {id: 2, name: 'AVUSTRALYA DOLARI', abbrv: 'AVD'},
    {id: 3, name: 'DANİMARKA KRONU', abbrv: 'DKR'},
    {id: 4, name: 'EURO', abbrv: 'EUR'},
    {id: 5, name: 'İNGİLİZ STERLİNİ', abbrv: 'STR'},
  ];

  function add(abbrv) {
    setArrToWatch([...arrToWatch, {abbrv}]);
  }
  function remove(abbrv) {
    setArrToWatch(arrToWatch.filter(i => i.abbrv !== abbrv));
  }
  useEffect(() => {
    (async () => {
      if (arrToWatch === ' ') {
        const a = await storageGet('watchlist');
        if (a) setArrToWatch(a);
        else setArrToWatch([{abbrv: ' '}]);
      } else await storageSet('watchlist', arrToWatch);
      console.log(arrToWatch);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrToWatch]);

  function checkControl(abbrv) {
    if (arrToWatch[0].abbrv) {
      const even = element => element.abbrv === abbrv;
      return arrToWatch.some(even);
    }
    return false;
  }

  if (StorageLoading) return <InfoCard />;
  else if (StorageError) {
    return (
      <InfoCard
        infoType={'ERROR'}
        btnText={t('btn02', {ns: 'common'})}
        infoHeader={t('err', {ns: 'common'})}
        infoText={t('errText', {ns: 'watchlist'})}
        onBtnPress={() => navigation.popToTop()}
      />
    );
  }

  if (arrToWatch[0].abbrv) {
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
