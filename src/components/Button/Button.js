import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './Button.style';

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
