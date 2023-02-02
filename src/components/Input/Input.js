import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './Input.style';

function Input({label, value, placeholder, onChangeText}) {
  return (
    <View>
      <Text>{label}</Text>
      <View>
        <TextInput
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
}

export default Input;
