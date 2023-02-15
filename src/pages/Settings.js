import React, {useState} from 'react';
import {SafeAreaView, Vibration, Switch, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {changeTheme} from '../stores/darkTheme';
import Button from '../components/Button';

function Settings() {
  const dispatch = useDispatch();
  const darkTheme = useSelector(state => state.darkTheme.darkTheme);

  const toggleSwitch = () => dispatch(changeTheme(!darkTheme));

  console.log(darkTheme);

  return (
    <SafeAreaView>
      <Text>Settings</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={darkTheme ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={darkTheme}
      />
      <Button text={'vibrate'} onPress={() => Vibration.vibrate(5000)} />
    </SafeAreaView>
  );
}

export default Settings;
