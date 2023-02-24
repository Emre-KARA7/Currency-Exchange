import {StyleSheet} from 'react-native';
import {Colors} from '../assets/colors';

export default StyleSheet.create({
  padding: {
    padding: 10,
    flex: 1,
  },
  formWarnText: {
    color: Colors.red,
    paddingLeft: 15,
  },
  flexRowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  flexRowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  rightBottom: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flex: 1,
  },
  flexOne: {
    flex: 1,
  },
  flexOne_bg_dark: {
    flex: 1,
    backgroundColor: Colors.dark_background2,
  },
  flexOne_bg: {
    flex: 1,
    backgroundColor: Colors.background2,
  },
  flexOnePaddingBG: {
    padding: 10,
    flex: 1,
    backgroundColor: Colors.background,
  },
  flexOnePaddingBG_dark: {
    padding: 10,
    flex: 1,
    backgroundColor: Colors.dark_background,
  },
  iconBtnStyle: {
    marginRight: 0,
    backgroundColor: Colors.background,
    color: Colors.textSecondary,
    fontSize: 35,
    width: 45,
  },
  dark_iconBtnStyle: {
    marginRight: 0,
    backgroundColor: Colors.dark_background,
    color: Colors.textSecondary,
    fontSize: 35,
    width: 45,
  },
  iconBtnOuterStyle: {
    margin: -8,
    backgroundColor: Colors.background,
    color: Colors.textSecondary,
  },
  textA_dark: {
    color: Colors.dark_textPrimary,
    fontSize: 18,
    marginTop: 15,
    marginLeft: 18,
  },
  textA: {
    color: Colors.textPrimary,
    fontSize: 18,
    marginTop: 15,
    marginLeft: 18,
  },
  textB_dark: {
    color: Colors.secondary,
    marginRight: 30,
    fontSize: 20,
    fontWeight: '500',
  },
  textB: {
    color: Colors.main,
    marginRight: 30,
    fontSize: 20,
    fontWeight: '500',
  },
  textC: {
    color: Colors.main,
    fontSize: 23,
    marginLeft: -15,
    fontWeight: '500',
    textAlignVertical: 'center',
  },
  exchangeTitle: {
    color: Colors.secondaryDarker,
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 20,
  },

  Center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
