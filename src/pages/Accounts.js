import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import Button from '../components/Button';

function Accounts({navigation}) {
  //
  function goToCreateAccountScreen() {
    navigation.navigate('CreateAccountScreen');
  }

  return (
    <SafeAreaView>
      <Text>Accounts</Text>
      <Button
        text={'CreateAccountScreen +'}
        onPress={goToCreateAccountScreen}
      />
    </SafeAreaView>
  );
}

export default Accounts;
