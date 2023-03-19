import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export default StyleSheet.create({
  container: {
    borderRadius: 5,
    margin: 3,
    padding: 3,
    paddingHorizontal: 7,
  },
  textType: {
    color: Colors.secondary,
    textAlign: 'right',
  },
  textType_dark: {
    color: Colors.secondary,
    textAlign: 'right',
  },
  innerBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  amount_account: {
    color: Colors.textPrimary,
    fontSize: 20,
  },
  amount_account_dark: {
    color: Colors.dark_textPrimary,
    fontSize: 20,
  },
  date_time: {
    color: Colors.textSecondary,
  },
  date_time_dark: {
    color: Colors.dark_textSecondary,
  },
});
