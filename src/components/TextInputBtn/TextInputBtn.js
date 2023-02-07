import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import styles from './TextInputBtn.style';

function Input({label, value, placeholder, onChangeText, btnText, onBtnPress}) {
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
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.container_btn} onPress={onBtnPress}>
            <Text style={styles.text_btn}>{btnText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Input;
