import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {useSelector} from 'react-redux'; //redux
import styles from './AccountCard.style';

const AccountCard = ({
  accountTitle,
  connectedBranch,
  IBAN,
  budget,
  onPress,
}) => {
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  return (
    <View>
      <TouchableOpacity
        style={darkTheme ? styles.container_dark : styles.container}>
        <Text style={darkTheme ? styles.title_dark : styles.title}>
          {accountTitle}
        </Text>
        <Text
          style={
            darkTheme ? styles.connectedBranch_dark : styles.connectedBranch
          }>
          {connectedBranch}
        </Text>
        <Text style={darkTheme ? styles.IBAN_dark : styles.IBAN}>
          IBAN: {IBAN}
        </Text>
        <View style={styles.budgetBox}>
          <Text
            style={darkTheme ? styles.budgetBoxKey_dark : styles.budgetBoxKey}>
            Bakiye:
          </Text>
          <Text
            style={
              darkTheme ? styles.budgetBoxValue_dark : styles.budgetBoxValue
            }>
            {budget}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AccountCard;
