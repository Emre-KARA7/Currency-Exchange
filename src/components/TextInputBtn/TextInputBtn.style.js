import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export default StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: Colors.background,
  },
  container_dark: {
    margin: 10,
    backgroundColor: Colors.dark_background,
  },
  label: {
    margin: 5,
    marginBottom: 2,
    fontSize: 18,
    fontWeight: '500',
    color: Colors.textPrimary,
  },
  label_dark: {
    margin: 5,
    marginBottom: 2,
    fontSize: 18,
    fontWeight: '500',
    color: Colors.dark_textPrimary,
  },
  innerContainer: {
    borderWidth: 1,
    borderColor: Colors.main,
    borderRadius: 8,
    flexDirection: 'row',
  },
  input: {
    fontSize: 16,
    color: Colors.textPrimary,
    flex: 6,
  },
  input_dark: {
    fontSize: 16,
    color: Colors.dark_textPrimary,
    flex: 6,
  },
  buttonView: {
    flex: 1,
  },
  container_btn: {
    borderWidth: 1,
    borderColor: Colors.main,
    height: 50,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  container_btn_dark: {
    borderWidth: 1,
    borderColor: Colors.main,
    height: 50,
    backgroundColor: Colors.dark_background,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  text_btn: {
    fontSize: 16,
    color: Colors.textPrimary,
  },
  text_btn_dark: {
    fontSize: 16,
    color: Colors.dark_textPrimary,
  },
});
