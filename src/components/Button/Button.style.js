import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
import percentage from '../../helpers/percentage';

export default StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.main,
    height: percentage(11.6),
    backgroundColor: Colors.background,
    margin: percentage(2.6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: percentage(2),
    width: percentage(28),
  },
  container_dark: {
    borderWidth: 2,
    borderColor: Colors.main,
    height: percentage(11.6),
    backgroundColor: Colors.dark_background,
    margin: percentage(2.6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: percentage(2),
    width: percentage(28),
  },
  text: {
    fontSize: percentage(3.7),
    color: Colors.textPrimary,
  },
  text_dark: {
    fontSize: percentage(3.7),
    color: Colors.dark_textPrimary,
  },
});
