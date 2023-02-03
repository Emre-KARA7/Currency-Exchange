import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Formik} from 'formik';
import axios from 'axios';
import Config from 'react-native-config';

import Button from '../../components/Button';
import Input from '../../components/Input';

function SignUp_2({route, navigation}) {
  //
  const {name, surname, b_date, tckn, photo} = route.params;

  function ApopToTop() {
    navigation.popToTop();
  }

  function handleForm(values) {
    axios
      .post(Config.API_URL + 'signup', {
        firstName: name,
        lastName: surname,
        date_of_birth: b_date,
        tckn: tckn,
        tel: values.tel,
        password: values.pass1,
        photo: photo,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <SafeAreaView>
      <Text>SignUp_2</Text>
      <Formik
        onSubmit={handleForm}
        initialValues={{tel: '', pass1: '', pass2: ''}}>
        {({handleSubmit, handleChange, values}) => (
          <View>
            <Input
              label="Telefon"
              placeholder="Write your name"
              onChangeText={handleChange('tel')}
              value={values.tel}
            />
            <Input
              label="Sifre"
              placeholder="Write your pass"
              onChangeText={handleChange('pass1')}
              value={values.pass1}
            />
            <Input
              label="Sifre (Tekrar)"
              placeholder="Write your pass"
              onChangeText={handleChange('pass2')}
              value={values.pass2}
            />
            <Button text={'next'} onPress={handleSubmit} />
          </View>
        )}
      </Formik>
      <Button text={'pop to top'} onPress={ApopToTop} />
    </SafeAreaView>
  );
}

export default SignUp_2;
