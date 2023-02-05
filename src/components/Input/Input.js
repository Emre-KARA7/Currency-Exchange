import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import DatePicker from 'react-native-date-picker';

import Button from '../Button';

import styles from './Input.style';

function Input({label, value, placeholder, onChangeText}) {
  //
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  console.log('render');
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.innerContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
        />

        <View style={styles.buttonView}>
          <Button text={'sec'} onPress={() => setOpen(true)} />
          <DatePicker
            modal
            mode="date"
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
              value = date.toLocaleString().substring(0, 8);
              console.log(value);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>
      </View>
    </View>
  );
}

export default Input;
