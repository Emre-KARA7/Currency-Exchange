import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
import percentage from '../../helpers/percentage';

export default StyleSheet.create({
  container: {
    margin: percentage(1.3),
    backgroundColor: Colors.background,
  },
  container_dark: {
    margin: percentage(1.3),
    backgroundColor: Colors.dark_background,
  },
  label: {
    margin: percentage(1),
    marginBottom: 2,
    fontSize: percentage(3.6),
    fontWeight: '500',
    color: Colors.textPrimary,
  },
  label_dark: {
    margin: percentage(1),
    marginBottom: 2,
    fontSize: percentage(3.6),
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
    justifyContent: 'space-between',
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
});
