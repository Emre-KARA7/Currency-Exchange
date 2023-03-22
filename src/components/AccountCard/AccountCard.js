import React from 'react';
import {TouchableOpacity, ImageBackground, View, Text} from 'react-native';
import {useSelector} from 'react-redux'; //redux
import styles from './AccountCard.style';
import {useTranslation} from 'react-i18next'; //i18n
import LinearGradient from 'react-native-linear-gradient';
import QRcode from '../QRcode';

const AccountCard = ({
  idForColor,
  accountTitle,
  connectedBranch,
  IBAN,
  budget,
  onPress,
}) => {
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  const {t} = useTranslation(); //i18n
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.container}
        colors={
          darkTheme
            ? Number(idForColor) % 2 === 0
              ? ['#00695C', '#004D40']
              : ['#1565C0', '#0D47A1']
            : Number(idForColor) % 2 === 0
            ? ['#80CBC4', '#009688']
            : ['#90CAF9', '#2196F3']
        }>
        <ImageBackground
          source={require('../../assets/img/card.jpg')}
          resizeMode="cover"
          imageStyle={styles.image}
          style={styles.imagebox}>
          <View style={styles.budgetBox}>
            <Text style={darkTheme ? styles.title_dark : styles.title}>
              {accountTitle}
            </Text>
            <Text
              style={
                darkTheme ? styles.connectedBranch_dark : styles.connectedBranch
              }>
              {connectedBranch}
            </Text>
          </View>

          <Text style={darkTheme ? styles.IBAN_dark : styles.IBAN}>{IBAN}</Text>
          <View style={styles.budgetBox}>
            <QRcode value={IBAN} />
            <Text
              style={
                darkTheme ? styles.budgetBoxValue_dark : styles.budgetBoxValue
              }>
              {budget}
            </Text>
          </View>
        </ImageBackground>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default AccountCard;
