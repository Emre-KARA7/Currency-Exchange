import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Formik} from 'formik';
import Config from 'react-native-config';
import {useDispatch, useSelector} from 'react-redux';
import {changeAuthState} from '../stores/auth';
import * as Yup from 'yup';
import pagesStyles from './pages.styles';
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
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux

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
      //console.error('Login handle form error');
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
    <SafeAreaView
      style={
        darkTheme
          ? pagesStyles.flexOnePaddingBG_dark
          : pagesStyles.flexOnePaddingBG
      }>
      <Formik
        validationSchema={LoginSchema}
        onSubmit={handleForm}
        initialValues={{tckn: '', pass: ''}}>
        {({handleSubmit, handleChange, touched, errors, values}) => (
          <View
            style={
              darkTheme
                ? pagesStyles.flexOnePaddingBG_dark
                : pagesStyles.flexOnePaddingBG
            }>
            <View style={pagesStyles.flexRowCenter}>
              <ProfilePhoto />
            </View>

            <Input
              label="tckn"
              placeholder="Write your name"
              onChangeText={handleChange('tckn')}
              value={values.tckn}
            />
            {errors.tckn && touched.tckn ? (
              <Text style={pagesStyles.formWarnText}>{errors.tckn}</Text>
            ) : null}

            <Input
              secure={true}
              label="pass"
              placeholder="Write your surname"
              onChangeText={handleChange('pass')}
              value={values.pass}
            />
            {errors.pass && touched.pass ? (
              <Text style={pagesStyles.formWarnText}>{errors.pass}</Text>
            ) : null}

            <View style={pagesStyles.flexRowCenter}>
              <Checkbox onPress={() => setRememberMe(!rememberMe)} />
              <Text style={pagesStyles.textC}>Remember Me</Text>
            </View>

            <View style={pagesStyles.rightBottom}>
              <Button text={'next'} onPress={handleSubmit} />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default LogIn;
