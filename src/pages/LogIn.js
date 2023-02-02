import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import Button from '../components/Button';

function LogIn({navigation}) {
  //
  function ApopToTop() {
    navigation.popToTop();
  }
  return (
    <SafeAreaView>
      <Text>LogIn</Text>
      <Button text={'pop to top'} onPress={ApopToTop} />
    </SafeAreaView>
  );
}

export default LogIn;
