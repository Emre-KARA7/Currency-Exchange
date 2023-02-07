import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Formik} from 'formik';
import Config from 'react-native-config';

import Checkbox from '../components/Checkbox';
import Input from '../components/Input';
import Button from '../components/Button';
import useHttps from '../hooks/useHttps';
import useStorage from '../hooks/useStorage';
import ProfilePhoto from '../components/ProfilePhoto';

function LogIn({navigation}) {
  //
  const {data, loading, error, post} = useHttps();
  const {
    StorageData,
    StorageLoading,
    StorageError,
    storageSet,
    storageGet,
    storageRemoveItem,
    storageClear,
  } = useStorage();

  function ApopToTop() {
    navigation.popToTop();
  }

  function handleForm(values) {
    post(Config.API_URL + 'login', values);
  }

  //if (data) console.log(data.data.status);
  // if (data && data.data.status === 'login success') {
  //   const {pass, tckn} = JSON.parse(data.config.data);
  //   console.log(pass);
  //   console.log(tckn);
  //   // storageSet('k1.tckn', );
  //   // storageSet('k1.pass', ;
  //}

  return (
    <SafeAreaView>
      <Formik onSubmit={handleForm} initialValues={{tckn: '', pass: ''}}>
        {({handleSubmit, handleChange, values}) => (
          <View>
            <ProfilePhoto />
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
