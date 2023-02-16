import React from 'react';
import {View, Text} from 'react-native';
import styles from './HistoryCard.style';
import {useSelector} from 'react-redux'; //redux

const HistoryCard = ({accountName, exchangeType, dateTime, amount}) => {
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux

  return (
    <View style={darkTheme ? styles.container_dark : styles.container}>
      <View style={styles.innerBox}>
        <Text
          style={
            darkTheme ? styles.amount_account_dark : styles.amount_account
          }>
          {accountName}
        </Text>
        <Text
          style={
            darkTheme ? styles.amount_account_dark : styles.amount_account
          }>
          {amount}
        </Text>
      </View>

      <Text style={darkTheme ? styles.textType_dark : styles.textType}>
        {exchangeType}
      </Text>

      <View style={styles.innerBox}>
        <Text style={darkTheme ? styles.date_time_dark : styles.date_time}>
          Tarih Zaman:
        </Text>
        <Text style={darkTheme ? styles.date_time_dark : styles.date_time}>
          {dateTime}
        </Text>
      </View>
    </View>
  );
};

export default HistoryCard;
