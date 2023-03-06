import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.secondary,
    backgroundColor: Colors.background,
    margin: 3,
    borderRadius: 5,
  },
  container_dark: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.secondary,
    backgroundColor: Colors.dark_background2,
    margin: 3,
    borderRadius: 5,
    justifyContent: 'space-between',
  },
  text: {
    color: Colors.textPrimary,
    flex: 3,
    paddingTop: 14,
    paddingLeft: 10,
  },
  text_dark: {
    color: Colors.dark_textPrimary,
    flex: 3,
    paddingTop: 14,
    paddingLeft: 10,
  },
  text_abrv: {
    color: Colors.textPrimary,
    flex: 1,
    textAlignVertical: 'center',
  },
  text_abrv_dark: {
    color: Colors.dark_textPrimary,
    flex: 1,
    textAlignVertical: 'center',
  },
});
