import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
import percentage from '../../helpers/percentage';

export default StyleSheet.create({
  container: {
    margin: percentage(2.5),
  },
  label: {
    margin: percentage(1),
    marginBottom: -5,
    fontSize: percentage(3.6),
    fontWeight: '500',
    color: Colors.textPrimary,
  },
  label_dark: {
    margin: percentage(1),
    marginBottom: -5,
    fontSize: percentage(3.6),
    fontWeight: '500',
    color: Colors.dark_textPrimary,
  },
  innerContainer: {
    borderBottomWidth: 2,
    borderColor: '#1E88E5',
    flexDirection: 'row',
  },
  input: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: -10,
    flex: 6,
  },
  input_dark: {
    fontSize: 16,
    marginBottom: -10,
    color: Colors.dark_textSecondary,
    flex: 6,
  },
});
