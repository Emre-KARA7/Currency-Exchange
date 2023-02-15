import React from 'react';
import {SafeAreaView, Vibration, Text} from 'react-native';
import Button from '../components/Button';

function Settings() {
  return (
    <SafeAreaView>
      <Text>Settings</Text>
      <Button text={'vibrate'} onPress={() => Vibration.vibrate(5000)} />
    </SafeAreaView>
  );
}

export default Settings;
