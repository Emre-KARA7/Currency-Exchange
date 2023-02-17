import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Vibration,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import styles from './InfoCard.style';
import {useSelector} from 'react-redux'; //redux
import Lottie from 'lottie-react-native';

const InfoCard = ({infoType, infoHeader, infoText, onBtnPress, btnText}) => {
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  const [animation, setAnimation] = useState(
    require('../../assets/lottie/loadingBlue.json'),
  );
  const [headerStyle, setheaderStyle] = useState(styles.headerLoading);
  const [btnStyle, setbtnStyle] = useState(styles.btnLoading);
  const [btnTextStyle, setbtnTextStyle] = useState(styles.btnTextLoading);

  useEffect(() => {
    switch (infoType) {
      case 'ERROR':
        setAnimation(require('../../assets/lottie/error.json'));
        setheaderStyle(styles.headerError);
        setbtnStyle(styles.btnError);
        setbtnTextStyle(styles.btnTextError);
        Vibration.vibrate(800);
        break;
      case 'WARNING':
        setAnimation(require('../../assets/lottie/warn.json'));
        setheaderStyle(styles.headerWarning);
        setbtnStyle(styles.btnWarning);
        setbtnTextStyle(styles.btnTextWarning);
        Vibration.vibrate(500);
        break;
      case 'INFO':
        setAnimation(require('../../assets/lottie/info.json'));
        setheaderStyle(styles.headerInformation);
        setbtnStyle(styles.btnInformation);
        setbtnTextStyle(styles.btnTextInformation);
        Vibration.vibrate();
        break;
      case 'SUCCESS':
        setAnimation(require('../../assets/lottie/checkLottie.json'));
        setheaderStyle(styles.headerSuccess);
        setbtnStyle(styles.btnSuccess);
        setbtnTextStyle(styles.btnTextSuccess);
        Vibration.vibrate(100);
        break;
      case 'LOADING':
        setAnimation(require('../../assets/lottie/loadingBlue.json'));
        setheaderStyle(styles.headerLoading);
        setbtnStyle(styles.btnLoading);
        setbtnTextStyle(styles.btnTextLoading);
        break;
    }
  }, [infoType]);

  return (
    <SafeAreaView>
      <View style={darkTheme ? styles.container_dark : styles.container}>
        <View style={styles.containerLottie}>
          <Lottie source={animation} autoPlay />
        </View>

        <Text style={headerStyle}>{infoHeader}</Text>

        <Text style={darkTheme ? styles.text_dark : styles.text}>
          {infoText}
        </Text>

        <TouchableOpacity onPress={onBtnPress} style={btnStyle}>
          <Text style={btnTextStyle}>{btnText}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default InfoCard;
