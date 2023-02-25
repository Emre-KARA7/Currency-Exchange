import React from 'react';
import {View, Text} from 'react-native';
import styles from './WatchlistCard.style';
import Button from '../Button';
import {useSelector} from 'react-redux'; //redux
import {useTranslation} from 'react-i18next'; //i18n

const WatchlistCard = ({
  name,
  abbreviation,
  buying,
  selling,
  onPressBuy,
  onPressSell,
}) => {
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  const {t} = useTranslation(); //i18n
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
        <Button text={t('btn01', {ns: 'watchlist'})} onPress={onPressBuy} />
      </View>

      <View style={styles.innerBox}>
        <Text style={darkTheme ? styles.textRate_dark : styles.textRate}>
          {selling}
        </Text>
        <Button text={t('btn02', {ns: 'watchlist'})} onPress={onPressSell} />
      </View>
    </View>
  );
};

export default WatchlistCard;
