import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import Button from '../../components/Button';

function SignUp_1({route, navigation}) {
  //
  const {name, surname, b_date, tckn} = route.params;

  function goToSignUp2() {
    navigation.navigate('SignUp2Screen', {
      name: name,
      surname: surname,
      b_date: b_date,
      tckn: tckn,
      photo: null,
    });
  }

  return (
    <SafeAreaView>
      <Text>SignUp_1</Text>
      <Button text={'goTo SignUp2'} onPress={goToSignUp2} />
    </SafeAreaView>
  );
}

export default SignUp_1;
