import React, {useState} from 'react';
import {SafeAreaView, View, KeyboardAvoidingView, Text} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-native-date-picker';
import pagesStyles from '../pages.styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import TextInputBtn from '../../components/TextInputBtn';
import {useTranslation} from 'react-i18next'; //i18n

function SignUp_0({navigation}) {
  //
  const [open, setOpen] = useState(false);
  const {t} = useTranslation(); //i18n

  function handleForm(values) {
    console.log(values);
    navigation.navigate('SignUp1Screen', {
      name: values.name,
      surname: values.surname,
      b_date: values.b_date.toDateString(),
      tckn: values.tckn,
    });
  }

  //<Text>{t('text02', {ns: 'app'})}</Text> //key - nanmespace
  const SignUp0Schema = Yup.object().shape({
    tckn: Yup.string()
      .min(11, t('yup01', {ns: 'common'}))
      .max(11, t('yup02', {ns: 'common'}))
      .matches(/^\d+$/, t('yup04', {ns: 'common'}))
      .required(t('yup03', {ns: 'common'})),
    name: Yup.string()
      .min(2, t('yup01', {ns: 'common'}))
      .max(50, t('yup02', {ns: 'common'}))
      .required(t('yup03', {ns: 'common'})),
    surname: Yup.string()
      .min(2, t('yup01', {ns: 'common'}))
      .max(50, t('yup02', {ns: 'common'}))
      .required(t('yup03', {ns: 'common'})),
    b_date: Yup.string()
      .min(2, t('yup01', {ns: 'common'}))
      .max(50, t('yup02', {ns: 'common'}))
      .required(t('yup03', {ns: 'common'})),
  });

  return (
    <SafeAreaView style={pagesStyles.signUp0_padding}>
      <Formik
        validationSchema={SignUp0Schema}
        onSubmit={handleForm}
        initialValues={{name: '', surname: '', b_date: new Date(), tckn: ''}}>
        {({handleSubmit, handleChange, touched, errors, values}) => (
          <View style={pagesStyles.flexOne}>
            <Input
              label={t('input01', {ns: 'signup'})}
              placeholder={t('placeholder01', {ns: 'signup'})}
              onChangeText={handleChange('name')}
              value={values.name}
            />
            {errors.name && touched.name ? (
              <Text style={pagesStyles.formWarnText}>*{errors.name}</Text>
            ) : null}
            <Input
              label={t('input02', {ns: 'signup'})}
              placeholder={t('placeholder02', {ns: 'signup'})}
              onChangeText={handleChange('surname')}
              value={values.surname}
            />
            {errors.surname && touched.surname ? (
              <Text style={pagesStyles.formWarnText}>*{errors.surname}</Text>
            ) : null}
            <TextInputBtn
              label={t('input03', {ns: 'signup'})}
              placeholder={t('placeholder03', {ns: 'signup'})}
              //onChangeText={handleChange('b_date')}
              onBtnPress={() => setOpen(true)}
              value={values.b_date.toDateString()}
            />
            {errors.b_date && touched.b_date ? (
              <Text style={pagesStyles.formWarnText}>*{errors.b_date}</Text>
            ) : null}
            <DatePicker
              modal
              open={open}
              mode={'date'}
              date={values.b_date}
              onConfirm={val => {
                values.b_date = val;
                setOpen(false);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
            <Input
              label={t('input04', {ns: 'signup'})}
              placeholder={t('placeholder04', {ns: 'signup'})}
              onChangeText={handleChange('tckn')}
              value={values.tckn}
            />
            {errors.tckn && touched.tckn ? (
              <Text style={pagesStyles.formWarnText}>*{errors.tckn}</Text>
            ) : null}

            <View style={pagesStyles.rightBottom}>
              <Button
                text={t('btn01', {ns: 'common'})}
                onPress={handleSubmit}
                colorsetNo={5}
              />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default SignUp_0;
