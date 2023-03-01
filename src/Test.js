import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {Provider, useSelector} from 'react-redux'; //redux
import store from './stores';

function Test() {
  return (
    <Provider store={store}>
      <View>
        <Text>Hayy</Text>
      </View>
    </Provider>
  );
}

export default Test;
