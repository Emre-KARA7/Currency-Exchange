import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
import percentage from '../../helpers/percentage';

export default StyleSheet.create({
  container: {
    borderRadius: 5,
    margin: 3,
    maxWidth: 500,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  innerBox: {
    flexDirection: 'column',
    flex: 1,
  },
  textAbbrv: {
    textAlign: 'center',
    color: Colors.secondary,
    fontSize: percentage(6),
    padding: 5,
  },
  textName: {
    textAlign: 'center',
    color: Colors.secondaryDarker,
    paddingHorizontal: 5,
    paddingTop: 7,
  },
  textName_dark: {
    textAlign: 'center',
    color: Colors.secondaryLighter,
    paddingHorizontal: 5,
    paddingTop: 7,
  },
  textRate: {
    color: Colors.mainDarker,
    textAlign: 'center',
    padding: 4,
    marginHorizontal: 11,
    marginBottom: -2,
    marginTop: 8,
    borderRadius: 10,
    width: percentage(28),
    backgroundColor: Colors.mainLighter,
  },
  textRate_dark: {
    fontSize: percentage(3.5),
    fontWeight: '600',
    color: Colors.mainDarker,
    textAlign: 'center',
    padding: 4,
    marginHorizontal: 11,
    marginBottom: -2,
    marginTop: 8,
    borderRadius: 10,
    width: percentage(28),
    backgroundColor: Colors.mainLighter,
  },
});
