import React, {useState} from 'react';
import {SafeAreaView, ImageBackground, View} from 'react-native';
import pagesStyles from './pages.styles';
import Button from '../components/Button';
import useStorage from '../hooks/useStorage';
import {changeTheme} from '../stores/darkTheme';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next'; //i18n

function Welcome({navigation}) {
  //
  const {storageGet} = useStorage();
  const [first, setFirst] = useState(true);
  const dispatch = useDispatch();
  const {t, i18n} = useTranslation(); //i18n

  if (first) {
    (async () => {
      setFirst(false);
      const a = await storageGet('theme');
      const b = await storageGet('lang');

      dispatch(changeTheme(a)); //set theme
      i18n.changeLanguage(b); //set lan
    })();
  }

  function goToLogIn() {
    navigation.navigate('LogInScreen');
  }

  function goToSignUp() {
    navigation.navigate('SignUp0Screen');
  }

  return (
    <ImageBackground
      source={require('../assets/img/sakura.jpg')}
      imageStyle={{opacity: 0.5}}
      resizeMode="cover"
      style={pagesStyles.backgroundImg}>
      <SafeAreaView style={pagesStyles.Center}>
        <View style={pagesStyles.flexRowCenter}>
          <Button
            text={t('login', {ns: 'login-welcome'})}
            onPress={goToLogIn}
          />
          <Button
            text={t('signup', {ns: 'login-welcome'})}
            onPress={goToSignUp}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default Welcome;
