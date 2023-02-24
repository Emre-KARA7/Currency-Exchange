import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export default StyleSheet.create({
  container: {
    height: 600,
    backgroundColor: Colors.background,
    flex: 1,
  },
  container_dark: {
    height: 600,
    backgroundColor: Colors.dark_background,
    flex: 1,
  },
  containerLottie: {
    height: 300,
  },
  headerError: {
    color: Colors.red,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 25,
  },
  headerWarning: {
    color: Colors.yellow,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 25,
  },
  headerInformation: {
    color: Colors.blue,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 25,
  },
  headerSuccess: {
    color: Colors.green,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 25,
  },
  headerLoading: {
    color: Colors.dark_textSecondary,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 25,
  },
  text: {
    color: Colors.textPrimary,
    padding: 20,
    fontSize: 15,
  },
  text_dark: {
    color: Colors.dark_textPrimary,
    padding: 20,
    fontSize: 15,
  },
  btnError: {
    borderColor: Colors.red,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  btnTextError: {
    color: Colors.red,
  },
  btnWarning: {
    borderColor: Colors.yellow,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  btnTextWarning: {
    color: Colors.yellow,
  },
  btnInformation: {
    borderColor: Colors.blue,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  btnTextInformation: {
    color: Colors.blue,
  },
  btnSuccess: {
    borderColor: Colors.green,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  btnTextSuccess: {
    color: Colors.green,
  },
  btnLoading: {height: 0},
  btnTextLoading: {},
});
