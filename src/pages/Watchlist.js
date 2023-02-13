import React from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';

import Button from '../components/Button';
import WatchlistCard from '../components/WatchlistCard';

function Watchlist({navigation}) {
  //
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

  function goToEditWatchlistScreen() {
    navigation.navigate('EditWatchlistScreen');
  }

  function goToExchangeScreen(abbreviation, exchangeMethod) {
    navigation.navigate('ExchangeScreen');
  }

  return (
    <SafeAreaView>
      <Button text={'edit watchlist'} onPress={goToEditWatchlistScreen} />
      <FlatList
        data={data}
        renderItem={({item}) => (
          <WatchlistCard
            name={item.name}
            abbreviation={item.abbrv}
            buying={item.buying}
            onPressBuy={() => {
              goToExchangeScreen(item.abbrv, 'BUY');
            }}
            selling={item.selling}
            onPressSell={() => {
              goToExchangeScreen(item.abbrv, 'SELL');
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
