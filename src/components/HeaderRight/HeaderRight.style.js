import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export default StyleSheet.create({
  flexRowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconBtnStyle: {
    marginRight: 0,
    backgroundColor: Colors.background,
    color: Colors.textSecondary,
    fontSize: 35,
    width: 45,
  },
  dark_iconBtnStyle: {
    marginRight: 0,
    backgroundColor: Colors.dark_background,
    color: Colors.textSecondary,
    fontSize: 35,
    width: 45,
  },
  iconBtnOuterStyle: {
    margin: -8,
    backgroundColor: Colors.background,
    color: Colors.textSecondary,
  },
  dark_iconBtnOuterStyle: {
    margin: -8,
    backgroundColor: Colors.dark_background,
    color: Colors.textSecondary,
  },
});
