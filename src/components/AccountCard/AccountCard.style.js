import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
import percentage from '../../helpers/percentage';

export default StyleSheet.create({
  image: {
    opacity: 0.2,
    borderRadius: percentage(2.5),
  },
  imagebox: {
    paddingHorizontal: percentage(5),
    paddingVertical: percentage(5),
  },
  container: {
    margin: percentage(2),
    borderRadius: percentage(2.5),
    marginHorizontal: percentage(2),
  },
  title_dark: {
    fontSize: percentage(4),
    fontWeight: '400',
    color: Colors.dark_textPrimary,
  },
  title: {
    fontSize: percentage(4),
    fontWeight: '400',
    color: Colors.textPrimary,
  },
  connectedBranch_dark: {
    fontSize: percentage(3.45),
    color: Colors.dark_textPrimary,
    flex: 1,
    textAlign: 'right',
  },
  connectedBranch: {
    fontSize: percentage(3.45),
    color: Colors.textPrimary,
    flex: 1,
    textAlign: 'right',
  },
  IBAN: {
    fontSize: percentage(5),
    marginVertical: percentage(8),
    textAlign: 'center',
  },
  IBAN_dark: {
    fontSize: percentage(5),
    color: Colors.dark_textPrimary,
    marginVertical: percentage(8),
    textAlign: 'center',
  },
  budgetBox: {
    flexDirection: 'row',
  },
  budgetBoxKey: {
    fontSize: percentage(4),
    flex: 1,
    color: Colors.textPrimary,
  },
  budgetBoxKey_dark: {
    fontSize: percentage(4),
    flex: 1,
    color: Colors.dark_textPrimary,
  },
  budgetBoxValue: {
    fontSize: percentage(4.5),
    flex: 1,
    textAlign: 'right',
    color: Colors.textPrimary,
  },
  budgetBoxValue_dark: {
    fontSize: percentage(4.5),
    flex: 1,
    textAlign: 'right',
    color: Colors.dark_textPrimary,
  },
});
