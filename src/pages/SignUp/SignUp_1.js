import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import pagesStyles from '../pages.styles';
import Button from '../../components/Button';
import ProfilePhoto from '../../components/ProfilePhoto';
import useStorage from '../../hooks/useStorage';
import InfoCard from '../../components/InfoCard';

function SignUp_1({route, navigation}) {
  //
  const {StorageLoading, StorageError, storageSet, storageGet} = useStorage();
  const [user, setUser] = useState(' ');
  const {name, surname, b_date, tckn} = route.params;
  const [Photo, setPhoto] = useState(null);

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
        btnText={'Tamam'}
        infoType={'WARNING'}
        infoHeader={'lutfen resim seciniz'}
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
        <Button text={'Gallery'} onPress={openGallery} />
        <Button text={'Camera'} onPress={openCamera} />
      </View>

      <View style={pagesStyles.rightBottom}>
        <Button text={'goTo SignUp2'} onPress={goToSignUp2} />
      </View>
    </SafeAreaView>
  );
}

export default SignUp_1;
