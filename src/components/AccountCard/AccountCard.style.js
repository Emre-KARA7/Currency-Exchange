import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export default StyleSheet.create({
  container_dark: {
    borderColor: Colors.main,
    borderWidth: 1,
    borderRadius: 6,
    margin: 5,
    backgroundColor: Colors.dark_background,
  },
  container: {
    borderColor: Colors.main,
    borderWidth: 1,
    borderRadius: 6,
    margin: 5,
    backgroundColor: Colors.background,
  },
  title_dark: {
    color: Colors.dark_textPrimary,
  },
  title: {
    color: Colors.dark_textPrimary,
  },
  connectedBranch_dark: {
    color: Colors.dark_textSecondary,
  },
  connectedBranch: {
    color: Colors.textSecondary,
  },
  IBAN: {
    color: Colors.textSecondary,
  },
  IBAN_dark: {
    color: Colors.dark_textSecondary,
  },
  budgetBox: {
    flexDirection: 'row',
    margin: 3,
  },
  budgetBoxKey: {
    flex: 1,
    color: Colors.textPrimary,
  },
  budgetBoxKey_dark: {
    flex: 1,
    color: Colors.dark_textPrimary,
  },
  budgetBoxValue: {
    flex: 1,
    textAlign: 'right',
    color: Colors.textPrimary,
  },
  budgetBoxValue_dark: {
    flex: 1,
    textAlign: 'right',
    color: Colors.dark_textPrimary,
  },
});
