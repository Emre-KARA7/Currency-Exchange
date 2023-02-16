import React from 'react';
import {View, Text} from 'react-native';
import styles from './WatchlistCard.style';
import Button from '../Button';
import {useSelector} from 'react-redux'; //redux

const WatchlistCard = ({
  name,
  abbreviation,
  buying,
  selling,
  onPressBuy,
  onPressSell,
}) => {
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux

  return (
    <View style={darkTheme ? styles.container_dark : styles.container}>
      <View style={styles.innerBox}>
        <Text style={styles.textAbbrv}>{abbreviation}</Text>
        <Text style={darkTheme ? styles.textName_dark : styles.textName}>
          {name}
        </Text>
      </View>

      <View style={styles.innerBox}>
        <Text style={darkTheme ? styles.textRate_dark : styles.textRate}>
          {buying}
        </Text>
        <Button text={'BUY'} onPress={onPressBuy} />
      </View>

      <View style={styles.innerBox}>
        <Text style={darkTheme ? styles.textRate_dark : styles.textRate}>
          {selling}
        </Text>
        <Button text={'SELL'} onPress={onPressSell} />
      </View>
    </View>
  );
};

export default WatchlistCard;
