import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Formik} from 'formik';
import axios from 'axios';
import Config from 'react-native-config';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import Input from '../components/Input';
import Button from '../components/Button';

function LogIn({navigation}) {
  //
  const [Check, setCheck] = useState(false);

  function ApopToTop() {
    navigation.popToTop();
  }

  function handleForm(values) {
    axios
      .post(Config.API_URL + 'login', {
        tckn: values.tckn,
        password: values.pass,
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
      <Formik onSubmit={handleForm} initialValues={{tckn: '', pass: ''}}>
        {({handleSubmit, handleChange, values}) => (
          <View>
            <Input
              label="tckn"
              placeholder="Write your name"
              onChangeText={handleChange('name')}
              value={values.tckn}
            />
            <Input
              label="pass"
              placeholder="Write your surname"
              onChangeText={handleChange('surname')}
              value={values.pass}
            />
            <Button text={'next'} onPress={handleSubmit} />
          </View>
        )}
      </Formik>
      <Button text={'pop to top'} onPress={ApopToTop} />
      <BouncyCheckbox onPress={Check} />
    </SafeAreaView>
  );
}

export default LogIn;
