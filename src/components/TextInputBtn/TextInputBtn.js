import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {useSelector} from 'react-redux'; //redux
import styles from './TextInputBtn.style';
import {Colors} from '../../assets/colors';
import Icon from 'react-native-vector-icons/EvilIcons';

function Input({label, value, placeholder, onChangeText, onBtnPress}) {
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
            <Icon
              name="calendar"
              size={50}
              color={
                darkTheme ? Colors.dark_textSecondary : Colors.textSecondary
              }
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Input;
