import React from 'react';
import {SafeAreaView, View} from 'react-native';
import pagesStyles from './pages.styles';
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
    <SafeAreaView style={pagesStyles.Center}>
      <View style={pagesStyles.flexRowCenter}>
        <Button text={'Log in'} onPress={goToLogIn} />
        <Button text={'Sign up'} onPress={goToSignUp} />
      </View>
    </SafeAreaView>
  );
}

export default Welcome;
