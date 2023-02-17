import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Formik} from 'formik';
import DatePicker from 'react-native-date-picker';
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

  return (
    <SafeAreaView>
      <Text>SignUp_0</Text>

      <Formik
        onSubmit={handleForm}
        initialValues={{name: '', surname: '', b_date: new Date(), tckn: ''}}>
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
            <TextInputBtn
              label="B Date"
              placeholder="Write your birth date"
              onChangeText={handleChange('b_date')}
              onBtnPress={() => setOpen(true)}
              value={values.b_date.toDateString()}
            />
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
            <Button text={'next'} onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default SignUp_0;
