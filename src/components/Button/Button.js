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
  //if color not set default is PINK which iis first index
  [
    ['#D500F9', '#D500F9'], //dark theme 0
    ['#D500F9', '#D500F9'], //light theme
  ],
  [
    ['#9C27B0', '#3F51B5'], //dark theme 1
    ['#F8BBD0', '#B3E5FC'], //light theme
  ],
  [
    ['#3F51B5', '#9C27B0'], //dark theme 2
    ['#B3E5FC', '#F8BBD0'], //light theme
  ],
  [
    ['#4CAF50', '#009688'], //dark theme 3
    ['#C8E6C9', '#B2DFDB'], //light theme
  ],
  [
    ['#009688', '#03A9F4'], //dark theme 4
    ['#B2DFDB', '#B3E5FC'], //light theme
  ],
  [
    ['#2196F3', '#3F51B5'], //dark theme 5
    ['#64B5F6', '#7986CB'], //light theme
  ],
  [
    ['#FFA726', '#FB8C00'], //dark theme 6
    ['#FFCC80', '#FFA726'], //light theme
  ],
  [
    ['#EC407A', '#D81B60'], //dark theme 7
    ['#F48FB1', '#EC407A'], //light theme
  ],
  [
    ['#039BE5', '#1E88E5'], //dark theme 8
    ['#4FC3F7', '#64B5F6'], //light theme
  ],
  [
    ['#1E88E5', '#3949AB'], //dark theme 9
    ['#64B5F6', '#7986CB'], //light theme
  ],
];

const Button = ({text, onPress, disabled, colorsetNo}) => {
  if (colorsetNo === null || colorsetNo === undefined) colorsetNo = 0;
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
