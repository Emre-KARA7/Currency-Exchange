import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {useSelector} from 'react-redux'; //redux
import styles from './TextInputBtn.style';
import {Colors} from '../../assets/colors';

function Input({label, value, placeholder, onChangeText, btnText, onBtnPress}) {
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  return (
    <View style={darkTheme ? styles.container_dark : styles.container}>
      <Text style={darkTheme ? styles.label_dark : styles.label}>{label}</Text>
      <View style={styles.innerContainer}>
        <TextInput
          style={darkTheme ? styles.input_dark : styles.input}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={
            darkTheme ? Colors.dark_textSeconday : Colors.textSecondary
          }
        />
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={darkTheme ? styles.container_btn_dark : styles.container_btn}
            onPress={onBtnPress}>
            <Text style={darkTheme ? styles.text_btn_dark : styles.text_btn}>
              {btnText}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Input;
