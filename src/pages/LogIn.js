import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Formik} from 'formik';
import Config from 'react-native-config';
import {useDispatch, useSelector} from 'react-redux';
import {changeAuthState} from '../stores/auth';
import * as Yup from 'yup';

import Checkbox from '../components/Checkbox';
import Input from '../components/Input';
import Button from '../components/Button';
import useHttps from '../hooks/useHttps';
import useStorage from '../hooks/useStorage';
import ProfilePhoto from '../components/ProfilePhoto';

function LogIn({navigation}) {
  //
  const dispatch = useDispatch();
  const authVal = useSelector(state => state.auth.auth);
  const {data, loading, error, post} = useHttps();
  const [rememberMe, setRememberMe] = useState(false);
  const {StorageData, StorageLoading, StorageError, storageSet, storageGet} =
    useStorage();

  async function handleForm(values) {
    try {
      await post(Config.API_URL + 'login', values);
      if ((data && data.data.status === 'login success') || true) {
        if (rememberMe) {
          //not finished
          const {pass, tckn} = JSON.parse(data.config.data);
          // console.log(JSON.stringify({tckn, pass}));

          await storageSet('user', {tckn, pass});
        }
        dispatch(changeAuthState(!authVal));
      }
    } catch (err) {
      console.error('Login handle form error');
    }
  }

  const LoginSchema = Yup.object().shape({
    tckn: Yup.string()
      .min(11, 'Too Short!')
      .max(11, 'Too Long!')
      .matches(/^\d+$/, 'not a tckn')
      .required('Required'),
    pass: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  return (
    <SafeAreaView>
      <Formik
        validationSchema={LoginSchema}
        onSubmit={handleForm}
        initialValues={{tckn: '', pass: ''}}>
        {({handleSubmit, handleChange, touched, errors, values}) => (
          <View>
            <ProfilePhoto />
            <Input
              label="tckn"
              placeholder="Write your name"
              onChangeText={handleChange('tckn')}
              value={values.tckn}
            />
            {errors.tckn && touched.tckn ? <Text>{errors.tckn}</Text> : null}
            <Input
              label="pass"
              placeholder="Write your surname"
              onChangeText={handleChange('pass')}
              value={values.pass}
            />
            {errors.pass && touched.pass ? <Text>{errors.pass}</Text> : null}
            <Checkbox onPress={() => setRememberMe(!rememberMe)} />
            <Button text={'next'} onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default LogIn;
