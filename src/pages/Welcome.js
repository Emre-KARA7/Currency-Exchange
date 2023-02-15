import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import Button from '../components/Button';

function Welcome({navigation}) {
  //
  function goToLogIn() {
    navigation.navigate('LogInScreen');
  }

  function goToSignUp() {
    navigation.navigate('SignUp0Screen');
  }

  return (
    <SafeAreaView>
      <Text>Welcome</Text>
      <Button
        text={'settings'}
        onPress={() => {
          navigation.navigate('SettingsScreen');
        }}
      />
      <Button text={'Log in'} onPress={goToLogIn} />
      <Button text={'Sign up'} onPress={goToSignUp} />
    </SafeAreaView>
  );
}

export default Welcome;
