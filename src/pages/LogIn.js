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
import InfoCard from '../components/InfoCard';
import {useTranslation} from 'react-i18next'; //i18n

function LogIn({navigation}) {
  //
  const dispatch = useDispatch();
  const authVal = useSelector(state => state.auth.auth);
  const {data, loading, error, post} = useHttps();
  const [user, setUser] = useState(' ');
  const [rememberMe, setRememberMe] = useState(false);
  const {StorageLoading, StorageError, storageSet, storageGet} = useStorage();
  const [UIBlock, setUIBlock] = useState(false);
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  const {t} = useTranslation(); //i18n

  async function handleForm(values) {
    setUIBlock(true);
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
      .min(11, t('yup01', {ns: 'common'}))
      .max(11, t('yup02', {ns: 'common'}))
      .matches(/^\d+$/, t('yup04', {ns: 'common'}))
      .required(t('yup03', {ns: 'common'})),
    pass: Yup.string()
      .min(2, t('yup01', {ns: 'common'}))
      .max(50, t('yup02', {ns: 'common'}))
      .required(t('yup03', {ns: 'common'})),
  });

  if (StorageLoading || loading) return <InfoCard />;
  else if (error) {
    return (
      <InfoCard
        onBtnPress={() => navigation.popToTop()}
        btnText={t('btn02', {ns: 'common'})}
        infoType={'ERROR'}
        infoHeader={t('err', {ns: 'common'})}
        infoText={t('errText01', {ns: 'login-welcome'})}
      />
    );
  } else if (StorageError) {
    return (
      <InfoCard
        onBtnPress={() => {}}
        btnText={t('btn02', {ns: 'common'})}
        infoType={'ERROR'}
        infoHeader={t('errHeader', {ns: 'login-welcome'})}
        infoText={t('errText02', {ns: 'login-welcome'})}
      />
    );
  } else if (data && data.data.status === 'login failed') {
    return (
      <InfoCard
        onBtnPress={() => navigation.popToTop()}
        btnText={t('btn02', {ns: 'common'})}
        infoType={'WARNING'}
        infoHeader={t('warnHeader', {ns: 'login-welcome'})}
        infoText={t('warnText', {ns: 'login-welcome'})}
      />
    );
  }

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
                label={t('label01', {ns: 'login-welcome'})}
                placeholder={t('placeholder01', {ns: 'login-welcome'})}
                onChangeText={handleChange('tckn')}
                value={values.tckn}
              />
              {errors.tckn && touched.tckn ? (
                <Text style={pagesStyles.formWarnText}>{errors.tckn}</Text>
              ) : null}

              <Input
                secure={true}
                label={t('label02', {ns: 'login-welcome'})}
                placeholder={t('placeholder02', {ns: 'login-welcome'})}
                onChangeText={handleChange('pass')}
                value={values.pass}
              />
              {errors.pass && touched.pass ? (
                <Text style={pagesStyles.formWarnText}>{errors.pass}</Text>
              ) : null}

              <View style={pagesStyles.flexRowCenter}>
                <Checkbox onPress={() => setRememberMe(!rememberMe)} />
                <Text style={pagesStyles.textC}>
                  {t('rememberMe', {ns: 'login-welcome'})}
                </Text>
              </View>

              <View style={pagesStyles.rightBottom}>
                <Button
                  text={t('btn01', {ns: 'common'})}
                  onPress={handleSubmit}
                  disabled={UIBlock}
                />
              </View>
            </View>
          )}
        </Formik>
      </SafeAreaView>
    );
  }
}

export default LogIn;
