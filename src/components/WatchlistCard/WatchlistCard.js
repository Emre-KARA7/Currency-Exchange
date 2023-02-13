import React from 'react';
import {View, Text} from 'react-native';
import styles from './WatchlistCard.style';
import Button from '../Button';

const WatchlistCard = ({
  name,
  abbreviation,
  buying,
  selling,
  onPressBuy,
  onPressSell,
}) => {
  //

  return (
    <View>
      <Text>{name}</Text>
      <Text>{abbreviation}</Text>
      <Text>{buying}</Text>
      <Button text={'BUY'} onPress={onPressBuy} />
      <Text>{selling}</Text>
      <Button text={'SELL'} onPress={onPressSell} />
    </View>
  );
};

export default WatchlistCard;
