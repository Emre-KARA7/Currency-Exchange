import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Formik} from 'formik';
import Config from 'react-native-config';
import {useDispatch, useSelector} from 'react-redux';
import {changeAuthState} from '../stores/auth';

import Checkbox from '../components/Checkbox';
import Input from '../components/Input';
import Button from '../components/Button';
import useHttps from '../hooks/useHttps';
import useStorage from '../hooks/useStorage';
import ProfilePhoto from '../components/ProfilePhoto';

function LogIn({navigation}) {
  //
  const dispatch = useDispatch();
  const {data, loading, error, post} = useHttps();
  const dd = useSelector(state => state.auth.auth);
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
          console.log(storageGet('user'));
        }
        dispatch(changeAuthState(!dd));
      }
    } catch (err) {
      console.error('olm hata lan');
    }
  }

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
            <Checkbox onPress={() => setRememberMe(!rememberMe)} />
            <Button text={'next'} onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default LogIn;
