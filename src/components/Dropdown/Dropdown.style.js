import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export default StyleSheet.create({
  input: {
    color: Colors.textPrimary,
    fontSize: 16,
  },
  input_dark: {
    color: Colors.dark_textPrimary,
    fontSize: 16,
  },

  container: {margin: 7},
  box: {borderColor: Colors.main},
  dropdown: {borderColor: Colors.secondaryLighter},

  disabledItem_dark: {backgroundColor: Colors.dark_background},
  disabledItem: {backgroundColor: Colors.background},
  dropdownItem: {},

  dropdownText: {color: Colors.textPrimary},
  dropdownText_dark: {color: Colors.dark_textPrimary},
  disabledText: {color: Colors.red},
});
