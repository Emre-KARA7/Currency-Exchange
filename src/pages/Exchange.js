import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Button from '../components/Button';
import {SelectList} from 'react-native-dropdown-select-list';
import Input from '../components/Input';

function Exchange({route}) {
  const {abbreviation, exchangeMethod, rate} = route.params;
  const method =
    exchangeMethod === 'BUY'
      ? {title: 'SATIN AL', exchangeAccount: 'Alinacak Hesap'}
      : {title: 'SAT', exchangeAccount: 'Aktarilacak  Hesap'};

  const [amount, setAmount] = useState(null);
  const [exchangeAccount, setExchangeAccount] = useState(null);

  //sahip olunana hesaplar
  const Accounts = [
    {key: '1', value: 'TL'},
    {key: '2', value: 'USD'},
    {key: '3', value: 'JPY'},
  ];

  return (
    <SafeAreaView>
      <Text>
        {abbreviation} {method.title}
      </Text>
      <Text>{method.exchangeAccount}</Text>
      <SelectList
        setSelected={val => setExchangeAccount(val)}
        data={Accounts}
        save="value"
      />
      <Text>
        Oran ({abbreviation}/TL) : {rate}
      </Text>
      <Input label={'Miktar'} value={amount} onChangeText={setAmount} />
      <Text>Sonuc: {rate * Number(amount)} </Text>
      <Button text={'Onayla'} onPress={() => {}} />
    </SafeAreaView>
  );
}

export default Exchange;
