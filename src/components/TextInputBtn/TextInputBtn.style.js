import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
import percentage from '../../helpers/percentage';

export default StyleSheet.create({
  container: {
    margin: percentage(1.3),
  },
  label: {
    margin: percentage(1),
    marginBottom: -5,
    fontSize: percentage(3.6),
    fontWeight: '500',
    color: Colors.textPrimary,
  },
  label_dark: {
    marginBottom: -5,
    margin: percentage(1),
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
    marginBottom: -10,
    fontSize: 16,
    color: Colors.textPrimary,
    flex: 6,
  },
  input_dark: {
    marginBottom: -10,
    fontSize: 16,
    color: Colors.dark_textPrimary,
    flex: 6,
  },
  buttonView: {
    justifyContent: 'space-between',
  },
  container_btn: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
