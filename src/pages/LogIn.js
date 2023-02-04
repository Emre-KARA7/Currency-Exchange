import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Formik} from 'formik';
import Config from 'react-native-config';

import Checkbox from '../components/Checkbox';
import useHttps from '../hooks/useHttps';
import Input from '../components/Input';
import Button from '../components/Button';

function LogIn({navigation}) {
  //
  const {data, loading, error, post} = useHttps();

  function ApopToTop() {
    navigation.popToTop();
  }

  function handleForm(values) {
    post(Config.API_URL + 'login', values);
  }

  if (data && data.status === 'login success') {
    console.log('burada kullanici kaydet');
  }

  return (
    <SafeAreaView>
      <Formik onSubmit={handleForm} initialValues={{tckn: '', pass: ''}}>
        {({handleSubmit, handleChange, values}) => (
          <View>
            <Input
              label="tckn"
              placeholder="Write your name"
              onChangeText={handleChange('tckn')}
              value={values.tckn}
            />
            <Input
              label="pass"
              placeholder="Write your surname"
              onChangeText={handleChange('pass')}
              value={values.pass}
            />
            <Button text={'next'} onPress={handleSubmit} />
          </View>
        )}
      </Formik>
      <Button text={'pop to top'} onPress={ApopToTop} />
      <Checkbox />
    </SafeAreaView>
  );
}

export default LogIn;
