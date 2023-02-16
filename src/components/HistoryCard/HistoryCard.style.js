import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.main,
    borderRadius: 5,
    backgroundColor: Colors.background,
    margin: 3,
    padding: 3,
  },
  container_dark: {
    borderWidth: 1,
    borderColor: Colors.main,
    borderRadius: 5,
    backgroundColor: Colors.dark_background,
    margin: 3,
    padding: 3,
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
