import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import pagesStyles from '../pages.styles';
import Button from '../../components/Button';
import ProfilePhoto from '../../components/ProfilePhoto';

function SignUp_1({route, navigation}) {
  //
  const {name, surname, b_date, tckn} = route.params;
  const [Photo, setPhoto] = useState(null);

  function goToSignUp2() {
    navigation.navigate('SignUp2Screen', {
      name: name,
      surname: surname,
      b_date: b_date,
      tckn: tckn,
      photo: Photo,
    });
  }

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
