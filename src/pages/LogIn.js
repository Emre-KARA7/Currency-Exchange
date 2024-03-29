import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Text,
  View,
} from 'react-native';
import {Formik} from 'formik';
import Config from 'react-native-config';
import {useDispatch, useSelector} from 'react-redux';
import {changeAuthState} from '../stores/auth';
import pagesStyles from './pages.styles';
import Checkbox from '../components/Checkbox';
import Input from '../components/Input';
import Button from '../components/Button';
import useHttps from '../hooks/useHttps';
import useStorage from '../hooks/useStorage';
import ProfilePhoto from '../components/ProfilePhoto';
import InfoCard from '../components/InfoCard';
import {useTranslation} from 'react-i18next'; //i18n
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../assets/colors';
import percentage from '../helpers/percentage';
import {yup} from '../helpers/yupSchemas';
import {bio} from '../helpers/biometricAuth';

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
  const [rememberMeValues, setRememberMeValues] = useState(null);
  const LoginSchema = yup('LoginSchema');
  const [biometricAuth, setbiometricAuth] = useState(false);
  async function handleForm(values) {
    setUIBlock(true);
    try {
      setRememberMeValues(values);
      await post(Config.API_URL + 'login', values);
    } catch (err) {
      //console.error('Login handle form error');
    }
  }

  bio(biometricAuth,setbiometricAuth);

  useEffect(() => {
    (async () => {
      if (user === ' ') {
        const a = await storageGet('user');
        if (a) setUser(a);
        else setUser({});
      } else await storageSet('user', user);
    })();
    console.log('user', user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (data && data.data.status === 'login success') {
      if (rememberMe) {
        storageSet('user', {
          ...user,
          tckn: rememberMeValues.tckn,
          pass: rememberMeValues.pass,
          rememberMe: true,
        });
      } else {
        storageSet('user', {
          ...user,
          tckn: null,
          pass: null,
          rememberMe: false,
        });
      }
      //storageSet('user', user);
      dispatch(changeAuthState(true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

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
      <ImageBackground
        source={require('../assets/img/sakura2.jpg')}
        imageStyle={{opacity: 0.3}}
        resizeMode="cover"
        style={pagesStyles.backgroundImg}>
        <SafeAreaView
          style={
            darkTheme
              ? pagesStyles.Login_flexOnePaddingBG_dark
              : pagesStyles.Login_flexOnePaddingBG
          }>
          <ScrollView>
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
                      ? pagesStyles.Login_flexOnePaddingBG_dark
                      : pagesStyles.Login_flexOnePaddingBG
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
                      colorsetNo={1}
                    />
                  </View>
                </View>
              )}
            </Formik>
            <View style={{alignSelf: 'flex-end', marginTop: -20, width: 100}}>
              <Icon.Button
                iconStyle={{fontSize: percentage(6)}}
                name="fingerprint"
                color={Colors.secondary}
                onPress={() => {
                  setbiometricAuth(true);
                }}
                backgroundColor="rgba(200, 230, 201, 0)">
                <Text style={pagesStyles.textB_dark}>Bio</Text>
              </Icon.Button>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

export default LogIn;
