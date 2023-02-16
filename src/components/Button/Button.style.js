import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export default StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.main,
    height: 50,
    backgroundColor: Colors.background,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: 120,
  },
  container_dark: {
    borderWidth: 2,
    borderColor: Colors.main,
    height: 50,
    backgroundColor: Colors.dark_background,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: 120,
  },
  text: {
    fontSize: 16,
    color: Colors.textPrimary,
  },
  text_dark: {
    fontSize: 16,
    color: Colors.dark_textPrimary,
  },
});
