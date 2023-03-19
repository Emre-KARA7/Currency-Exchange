import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useSelector} from 'react-redux'; //redux
import styles from './Button.style';
import LinearGradient from 'react-native-linear-gradient';

// [ // start      end
//   ['#1E88E5', '#BA68C8'], //dark theme
//   ['#81D4FA', '#E1BEE7'], //light theme
// ],

const colorset = [
  [
    ['#3F51B5', '#9C27B0'],
    ['#F8BBD0', '#B3E5FC'],
  ],
  [
    ['#9C27B0', '#3F51B5'],
    ['#B3E5FC', '#F8BBD0'],
  ],
];

const Button = ({text, onPress, disabled, colorsetNo}) => {
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={darkTheme ? colorset[colorsetNo][0] : colorset[colorsetNo][1]}
      style={styles.container}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={disabled ? () => {} : onPress}>
        <Text style={darkTheme ? styles.text_dark : styles.text}>{text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Button;
