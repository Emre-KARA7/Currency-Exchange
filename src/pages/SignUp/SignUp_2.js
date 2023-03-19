import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Formik} from 'formik';
import useHttps from '../../hooks/useHttps';
import Config from 'react-native-config';
import * as Yup from 'yup';
import pagesStyles from '../pages.styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import InfoCard from '../../components/InfoCard';
import {useTranslation} from 'react-i18next'; //i18n

function SignUp_2({route, navigation}) {
  //
  const {name, surname, b_date, tckn, photo} = route.params;
  const {data, loading, error, post} = useHttps();
  const [UIBlock, setUIBlock] = useState(false);
  const {t} = useTranslation(); //i18n

  function handleForm(values) {
    setUIBlock(true);
    post(Config.API_URL + 'signup', values);
  }

  const SignUp2Schema = Yup.object().shape({
    tel: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        t('yup05', {ns: 'common'}),
      )
      .min(10, t('yup01', {ns: 'common'}))
      .max(10, t('yup02', {ns: 'common'}))
      .required(t('yup03', {ns: 'common'})),
    pass1: Yup.string()
      .min(2, t('yup01', {ns: 'common'}))
      .max(50, t('yup02', {ns: 'common'}))
      .required(t('yup03', {ns: 'common'})),
    pass2: Yup.string()
      .min(2, t('yup01', {ns: 'common'}))
      .max(50, t('yup02', {ns: 'common'}))
      .required(t('yup03', {ns: 'common'})),
  });

  if (error) {
    return (
      <InfoCard
        infoType={'ERROR'}
        btnText={t('btn02', {ns: 'common'})}
        infoHeader={t('err', {ns: 'common'})}
        infoText={t('errText', {ns: 'common'})}
        onBtnPress={() => {
          navigation.popToTop();
        }}
      />
    );
  } else if (loading) {
    return <InfoCard />;
  } else if (data && data.data.status === 'sign up success') {
    return (
      <InfoCard
        infoType={'SUCCESS'}
        btnText={t('btn02', {ns: 'common'})}
        infoHeader={t('infoHeader01', {ns: 'signup'})}
        infoText={t('infoText01', {ns: 'signup'})}
        onBtnPress={() => {
          navigation.popToTop();
        }}
      />
    );
  } else if (data && data.data.status === 'sign up failed') {
    return (
      <InfoCard
        infoType={'INFO'}
        btnText={t('btn02', {ns: 'common'})}
        infoHeader={t('infoHeader02', {ns: 'signup'})}
        infoText={t('infoText02', {ns: 'signup'})}
        onBtnPress={() => {
          navigation.popToTop();
        }}
      />
    );
  }

  return (
    <SafeAreaView style={pagesStyles.padding}>
      <Formik
        validationSchema={SignUp2Schema}
        onSubmit={handleForm}
        initialValues={{tel: '', pass1: '', pass2: ''}}>
        {({handleSubmit, handleChange, touched, errors, values}) => (
          <View style={pagesStyles.flexOne}>
            <Input
              label={t('input05', {ns: 'signup'})}
              placeholder={t('placeholder05', {ns: 'signup'})}
              onChangeText={handleChange('tel')}
              value={values.tel}
            />
            {errors.tel && touched.tel ? (
              <Text style={pagesStyles.formWarnText}>{errors.tel}</Text>
            ) : null}
            <Input
              secureTextEntry={true}
              label={t('input06', {ns: 'signup'})}
              placeholder={t('placeholder06', {ns: 'signup'})}
              onChangeText={handleChange('pass1')}
              value={values.pass1}
            />
            {errors.pass1 && touched.pass1 ? (
              <Text style={pagesStyles.formWarnText}>{errors.pass1}</Text>
            ) : null}
            <Input
              secureTextEntry={true}
              label={t('input07', {ns: 'signup'})}
              placeholder={t('placeholder06', {ns: 'signup'})}
              onChangeText={handleChange('pass2')}
              value={values.pass2}
            />
            {errors.pass2 && touched.pass2 ? (
              <Text style={pagesStyles.formWarnText}>{errors.pass2}</Text>
            ) : null}

            <View style={pagesStyles.rightBottom}>
              <Button
                text={t('btn03', {ns: 'common'})}
                onPress={handleSubmit}
                disabled={UIBlock}
                colorsetNo={5}
              />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default SignUp_2;
