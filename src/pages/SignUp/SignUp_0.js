import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-native-date-picker';
import pagesStyles from '../pages.styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import TextInputBtn from '../../components/TextInputBtn';

function SignUp_0({navigation}) {
  //
  const [open, setOpen] = useState(false);

  function handleForm(values) {
    navigation.navigate('SignUp1Screen', {
      name: values.name,
      surname: values.surname,
      b_date: values.b_date,
      tckn: values.tckn,
    });
  }

  const SignUp0Schema = Yup.object().shape({
    tckn: Yup.string()
      .min(11, 'Too Short!')
      .max(11, 'Too Long!')
      .matches(/^\d+$/, 'not a tckn')
      .required('Required'),
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    surname: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    b_date: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  return (
    <SafeAreaView style={pagesStyles.padding}>
      <Formik
        validationSchema={SignUp0Schema}
        onSubmit={handleForm}
        initialValues={{name: '', surname: '', b_date: new Date(), tckn: ''}}>
        {({handleSubmit, handleChange, touched, errors, values}) => (
          <View>
            <Input
              label="Name"
              placeholder="Write your name"
              onChangeText={handleChange('name')}
              value={values.name}
            />
            {errors.name && touched.name ? (
              <Text style={pagesStyles.formWarnText}>*{errors.name}</Text>
            ) : null}
            <Input
              label="Surname"
              placeholder="Write your surname"
              onChangeText={handleChange('surname')}
              value={values.surname}
            />
            {errors.surname && touched.surname ? (
              <Text style={pagesStyles.formWarnText}>*{errors.surname}</Text>
            ) : null}
            <TextInputBtn
              label="B Date"
              placeholder="Write your birth date"
              onChangeText={handleChange('b_date')}
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
              label="TCKN"
              placeholder="Write your TCKN"
              onChangeText={handleChange('tckn')}
              value={values.tckn}
            />
            {errors.tckn && touched.tckn ? (
              <Text style={pagesStyles.formWarnText}>*{errors.tckn}</Text>
            ) : null}
            <Button text={'next'} onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default SignUp_0;
