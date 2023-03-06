import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
import percentage from '../../helpers/percentage';

export default StyleSheet.create({
  img: {
    margin: percentage(2),
    backgroundColor: Colors.mainLighter,
    width: percentage(35),
    height: percentage(35),
    borderRadius: 100,
  },
});
