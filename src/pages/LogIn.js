import React, {useState, useEffect} from 'react';
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
  const [user, setUser] = useState(' ');
  const [rememberMe, setRememberMe] = useState(false);
  const {StorageLoading, StorageError, storageSet, storageGet} = useStorage();
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux

  async function handleForm(values) {
    try {
      await post(Config.API_URL + 'login', values);
      if ((data && data.data.status === 'login success') || true) {
        if (rememberMe) {
          setUser({
            ...user,
            tckn: values.tckn,
            pass: values.pass,
            rememberMe: true,
          });
        } else {
          setUser({
            ...user,
            tckn: null,
            pass: null,
            rememberMe: false,
          });
        }
        dispatch(changeAuthState(!authVal));
      }
    } catch (err) {
      //console.error('Login handle form error');
    }
  }

  useEffect(() => {
    (async () => {
      if (user === ' ') {
        const a = await storageGet('user');
        if (a) setUser(a);
        else setUser({});
      } else await storageSet('user', user);
    })();
    console.log(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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

  if (user !== ' ') {
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
          initialValues={{
            tckn: user.rememberMe ? user.tckn : '',
            pass: user.rememberMe ? user.pass : '',
          }}>
          {({handleSubmit, handleChange, touched, errors, values}) => (
            <View
              style={
                darkTheme
                  ? pagesStyles.flexOnePaddingBG_dark
                  : pagesStyles.flexOnePaddingBG
              }>
              <View style={pagesStyles.flexRowCenter}>
                <ProfilePhoto data={user.photo ? user.photo : false} />
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
                <Checkbox
                  isChecked={user.rememberMe}
                  onPress={() => setRememberMe(!rememberMe)}
                />
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
}

export default LogIn;
