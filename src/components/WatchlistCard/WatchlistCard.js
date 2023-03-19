import React from 'react';
import {View, Text} from 'react-native';
import styles from './WatchlistCard.style';
import Button from '../Button';
import {useSelector} from 'react-redux'; //redux
import {useTranslation} from 'react-i18next'; //i18n
import LinearGradient from 'react-native-linear-gradient';

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
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0.8, y: 0}}
      colors={darkTheme ? ['#37474F', '#162228'] : ['#E0F2F1', '#B0BEC5']}
      style={styles.container}>
      <View style={styles.innerBox}>
        <Text style={styles.textAbbrv}>{abbreviation}</Text>
        <Text style={darkTheme ? styles.textName_dark : styles.textName}>
          {name}
        </Text>
      </View>

      <View style={styles.innerBox}>
        <Text
          numberOfLines={1}
          style={darkTheme ? styles.textRate_dark : styles.textRate}>
          {buying}
        </Text>
        <Button
          text={t('btn01', {ns: 'watchlist'})}
          onPress={onPressBuy}
          colorsetNo={8}
        />
      </View>

      <View style={styles.innerBox}>
        <Text
          numberOfLines={1}
          style={darkTheme ? styles.textRate_dark : styles.textRate}>
          {selling}
        </Text>
        <Button
          text={t('btn02', {ns: 'watchlist'})}
          onPress={onPressSell}
          colorsetNo={9}
        />
      </View>
    </LinearGradient>
  );
};

export default WatchlistCard;
