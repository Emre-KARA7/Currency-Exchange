import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.main,
    borderRadius: 5,
    backgroundColor: Colors.background,
    margin: 3,
    flexDirection: 'row',
  },
  container_dark: {
    borderWidth: 1,
    borderColor: Colors.main,
    borderRadius: 5,
    backgroundColor: Colors.dark_background,
    margin: 3,
    flexDirection: 'row',
  },
  innerBox: {
    flexDirection: 'column',
    flex: 1,
  },
  textAbbrv: {
    textAlign: 'center',
    color: Colors.secondary,
    fontSize: 23,
    padding: 5,
  },
  textName: {
    textAlign: 'center',
    color: Colors.secondaryDarker,
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
    backgroundColor: Colors.mainLighter,
  },
  textRate_dark: {
    color: Colors.mainDarker,
    textAlign: 'center',
    padding: 4,
    marginHorizontal: 11,
    marginBottom: -2,
    marginTop: 8,
    borderRadius: 10,
    backgroundColor: Colors.mainLighter,
  },
});
