import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
import percentage from '../../helpers/percentage';

export default StyleSheet.create({
  input: {
    color: Colors.textPrimary,
    fontSize: percentage(3.5),
  },
  input_dark: {
    color: Colors.dark_textPrimary,
    fontSize: percentage(3.5),
  },

  container: {margin: percentage(1)},
  box: {
    borderColor: '#1E88E5',
    borderRadius: 0,
    borderBottomWidth: 2,
    borderWidth: 0,
  },
  dropdown: {borderColor: Colors.secondaryLighter},

  disabledItem_dark: {backgroundColor: Colors.dark_background},
  disabledItem: {backgroundColor: Colors.background},
  dropdownItem: {},

  dropdownText: {color: Colors.textPrimary},
  dropdownText_dark: {color: Colors.dark_textPrimary},
  disabledText: {color: Colors.red},
});
