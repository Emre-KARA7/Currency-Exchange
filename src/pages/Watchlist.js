import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import Button from '../components/Button';

function Watchlist({navigation}) {
  //
  function goToEditWatchlistScreen() {
    navigation.navigate('EditWatchlistScreen');
  }

  function goToExchangeScreen() {
    navigation.navigate('ExchangeScreen');
  }

  return (
    <SafeAreaView>
      <Text>Watchlist</Text>
      <Button text={'edit watchlist'} onPress={goToEditWatchlistScreen} />
      <Button text={'exchange ><'} onPress={goToExchangeScreen} />
    </SafeAreaView>
  );
}

export default Watchlist;
