import {ImageComponent, StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
import percentage from '../../helpers/percentage';

export default StyleSheet.create({
  container_dark: {
    borderColor: Colors.main,
    borderTopWidth: 1,
    marginHorizontal: percentage(1),
    paddingHorizontal: percentage(2),
    paddingVertical: percentage(1),
    backgroundColor: Colors.dark_background,
  },
  container: {
    borderColor: Colors.mainLighter,
    borderTopWidth: 1,
    marginHorizontal: percentage(1),
    paddingHorizontal: percentage(2),
    paddingVertical: percentage(1),
    backgroundColor: Colors.background,
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
    color: Colors.dark_textSecondary,
  },
  connectedBranch: {
    fontSize: percentage(3.45),
    color: Colors.textSecondary,
  },
  IBAN: {
    fontSize: percentage(3.6),
    color: Colors.textSecondary,
  },
  IBAN_dark: {
    fontSize: percentage(3.6),
    color: Colors.dark_textSecondary,
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
