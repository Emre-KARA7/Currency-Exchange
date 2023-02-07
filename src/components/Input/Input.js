import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './Input.style';

function Input({label, value, placeholder, onChangeText}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.innerContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
}

export default Input;
