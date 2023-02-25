import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import pagesStyles from '../pages.styles';
import Button from '../../components/Button';
import ProfilePhoto from '../../components/ProfilePhoto';
import useStorage from '../../hooks/useStorage';
import InfoCard from '../../components/InfoCard';
import {useTranslation} from 'react-i18next'; //i18n

function SignUp_1({route, navigation}) {
  //
  const {StorageLoading, StorageError, storageSet, storageGet} = useStorage();
  const [user, setUser] = useState(' ');
  const {name, surname, b_date, tckn} = route.params;
  const [Photo, setPhoto] = useState(null);
  const {t} = useTranslation(); //i18n

  function goToSignUp2() {
    if (Photo) {
      setUser({
        ...user,
        photo: Photo.assets[0].uri,
      });

      navigation.navigate('SignUp2Screen', {
        name: name,
        surname: surname,
        b_date: b_date,
        tckn: tckn,
        photo: Photo,
      });
    } else {
      setPhoto('warn');
    }
  }

  useEffect(() => {
    (async () => {
      if (user === ' ') {
        const a = await storageGet('user');
        if (a) setUser(a);
        else setUser({});
      } else await storageSet('user', user);
      console.log(user);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  function openCamera() {
    launchCamera({mediaType: 'photo', includeBase64: true}, response => {
      if (!response.didCancel && response.assets[0].type) {
        setPhoto(response);
      }
    });
  }

  function openGallery() {
    launchImageLibrary({mediaType: 'photo', includeBase64: true}, response => {
      if (!response.didCancel && response.assets[0].type) {
        setPhoto(response);
      }
    });
  }

  if (Photo === 'warn') {
    return (
      <InfoCard
        btnText={t('btn02', {ns: 'common'})}
        infoType={'WARNING'}
        infoHeader={t('warn-header01', {ns: 'signup'})}
        infoText={t('warn01', {ns: 'signup'})}
        onBtnPress={() => setPhoto(null)}
      />
    );
  }

  return (
    <SafeAreaView style={pagesStyles.padding}>
      <View style={pagesStyles.flexRowCenter}>
        <ProfilePhoto data={Photo ? Photo.assets[0].uri : false} />
      </View>

      <View style={pagesStyles.flexRowCenter}>
        <Button text={t('gallery', {ns: 'signup'})} onPress={openGallery} />
        <Button text={t('camera', {ns: 'signup'})} onPress={openCamera} />
      </View>

      <View style={pagesStyles.rightBottom}>
        <Button text={t('btn01', {ns: 'common'})} onPress={goToSignUp2} />
      </View>
    </SafeAreaView>
  );
}

export default SignUp_1;
