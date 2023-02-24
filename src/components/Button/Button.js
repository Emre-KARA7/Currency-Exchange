import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useSelector} from 'react-redux'; //redux
import styles from './Button.style';

const Button = ({text, onPress, disabled}) => {
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  return (
    <TouchableOpacity
      style={darkTheme ? styles.container_dark : styles.container}
      onPress={disabled ? () => {} : onPress}>
      <Text style={darkTheme ? styles.text_dark : styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
