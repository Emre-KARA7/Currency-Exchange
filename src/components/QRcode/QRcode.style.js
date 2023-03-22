import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
import percentage from '../../helpers/percentage';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: percentage(86),
    padding: percentage(5),
  },
  ico: {
    fontSize: percentage(13),
    color: '#FFF',
    opacity: 0.5,
  },
});
