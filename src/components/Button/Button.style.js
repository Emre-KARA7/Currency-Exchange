import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
import percentage from '../../helpers/percentage';

export default StyleSheet.create({
  touchable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: percentage(11.6),
    margin: percentage(2.6),
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
