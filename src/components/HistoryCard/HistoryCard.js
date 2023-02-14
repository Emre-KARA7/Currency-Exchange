import React from 'react';
import {View, Text} from 'react-native';
import styles from './HistoryCard.style';

const HistoryCard = ({accountName, exchangeType, dateTime, amount}) => {
  //

  return (
    <View>
      <Text>{exchangeType}</Text>

      <Text>{accountName}</Text>
      <Text>{amount}</Text>

      <Text>Tarih:</Text>
      <Text>{dateTime}</Text>
    </View>
  );
};

export default HistoryCard;
