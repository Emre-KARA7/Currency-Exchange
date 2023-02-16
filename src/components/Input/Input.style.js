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
    fontSize: 16,
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
    color: Colors.textSecondary,
    flex: 6,
  },
  input_dark: {
    fontSize: 16,
    color: Colors.dark_textSeconday,
    flex: 6,
  },
});
