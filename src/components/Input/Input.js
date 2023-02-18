import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {useSelector} from 'react-redux'; //redux
import styles from './Input.style';
import {Colors} from '../../assets/colors';

function Input({label, value, placeholder, onChangeText, secure}) {
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  return (
    <View style={darkTheme ? styles.container_dark : styles.container}>
      <Text style={darkTheme ? styles.label_dark : styles.label}>{label}</Text>
      <View style={styles.innerContainer}>
        <TextInput
          secureTextEntry={secure}
          style={darkTheme ? styles.input_dark : styles.input}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={
            darkTheme ? Colors.dark_textSecondary : Colors.textSecondary
          }
        />
      </View>
    </View>
  );
}

export default Input;
