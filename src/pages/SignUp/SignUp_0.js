import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Formik} from 'formik';

import Button from '../../components/Button';
import Input from '../../components/Input';

function SignUp_0({navigation}) {
  //
  function handleForm(values) {
    navigation.navigate('SignUp1Screen', {
      name: values.name,
      surname: values.surname,
      b_date: values.b_date,
      tckn: values.tckn,
    });
  }

  return (
    <SafeAreaView>
      <Text>SignUp_0</Text>
      <Formik
        onSubmit={handleForm}
        initialValues={{name: '', surname: '', b_date: '', tckn: ''}}>
        {({handleSubmit, handleChange, values}) => (
          <View>
            <Input
              label="Name"
              placeholder="Write your name"
              onChangeText={handleChange('name')}
              value={values.name}
            />
            <Input
              label="Surname"
              placeholder="Write your surname"
              onChangeText={handleChange('surname')}
              value={values.surname}
            />
            <Input
              label="B Date"
              placeholder="Write your birth date"
              onChangeText={handleChange('b_date')}
              value={values.b_date}
            />
            <Input
              label="TCKN"
              placeholder="Write your TCKN"
              onChangeText={handleChange('tckn')}
              value={values.tckn}
            />
            <Button text={'next'} onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default SignUp_0;
