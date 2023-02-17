import React from 'react';
import {View, Text} from 'react-native';
import styles from './InfoCard.style';
import {useSelector} from 'react-redux'; //redux
import Lottie from 'lottie-react-native';

const InfoCard = ({infoType, infoHeader, infoText}) => {
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux

  return (
    <View style={styles.container}>
      <Lottie
        source={require('../../assets/lottie/checkLottie.json')}
        autoPlay
      />
    </View>
  );
};

export default InfoCard;
