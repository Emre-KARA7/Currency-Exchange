import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Formik} from 'formik';
import useHttps from '../../hooks/useHttps';
import Config from 'react-native-config';
import * as Yup from 'yup';
import pagesStyles from '../pages.styles';
import Button from '../../components/Button';
import Input from '../../components/Input';

function SignUp_2({route, navigation}) {
  //
  const {name, surname, b_date, tckn, photo} = route.params;
  const {data, loading, error, post} = useHttps();

  function handleForm(values) {
    post(Config.API_URL + 'signup', values);
  }

  const SignUp2Schema = Yup.object().shape({
    tel: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        'Phone number is not valid',
      )
      .min(10, 'Too Short')
      .max(10, 'Too Long')
      .required('Required'),
    pass1: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    pass2: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  return (
    <SafeAreaView style={pagesStyles.padding}>
      <Formik
        validationSchema={SignUp2Schema}
        onSubmit={handleForm}
        initialValues={{tel: '', pass1: '', pass2: ''}}>
        {({handleSubmit, handleChange, touched, errors, values}) => (
          <View style={pagesStyles.flexOne}>
            <Input
              label="Telefon"
              placeholder="Write your name"
              onChangeText={handleChange('tel')}
              value={values.tel}
            />
            {errors.tel && touched.tel ? (
              <Text style={pagesStyles.formWarnText}>{errors.tel}</Text>
            ) : null}
            <Input
              secureTextEntry={true}
              label="Sifre"
              placeholder="Write your pass"
              onChangeText={handleChange('pass1')}
              value={values.pass1}
            />
            {errors.pass1 && touched.pass1 ? (
              <Text style={pagesStyles.formWarnText}>{errors.pass1}</Text>
            ) : null}
            <Input
              secureTextEntry={true}
              label="Sifre (Tekrar)"
              placeholder="Write your pass"
              onChangeText={handleChange('pass2')}
              value={values.pass2}
            />
            {errors.pass2 && touched.pass2 ? (
              <Text style={pagesStyles.formWarnText}>{errors.pass2}</Text>
            ) : null}

            <View style={pagesStyles.rightBottom}>
              <Button text={'next'} onPress={handleSubmit} />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default SignUp_2;
