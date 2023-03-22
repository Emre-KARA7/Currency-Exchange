import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './HistoryCard.style';
import {useSelector} from 'react-redux'; //redux
import LinearGradient from 'react-native-linear-gradient';
import generateReceiptPDF from '../../helpers/generateReceiptPDF';

const HistoryCard = ({
  accountName,
  exchangeType,
  dateTime,
  amount,
  exchangeTypeAsNum,
}) => {
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  const [count, setCount] = useState(0);
  if (count > 1)
    generateReceiptPDF(accountName, dateTime, amount.toString(), exchangeType);
  return (
    <TouchableOpacity onPress={() => setCount(count + 1)}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0.8, y: 0}}
        colors={
          darkTheme
            ? exchangeTypeAsNum == 1
              ? ['#004D40', '#263238']
              : ['#01579B', '#263238']
            : exchangeTypeAsNum == 1
            ? ['#80CBC4', '#EEEEEE']
            : ['#81D4FA', '#EEEEEE']
        }
        style={styles.container}>
        <View style={styles.innerBox}>
          <Text
            style={
              darkTheme ? styles.amount_account_dark : styles.amount_account
            }>
            VADESIZ {accountName}
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
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default HistoryCard;
