import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import useHttps from '../hooks/useHttps';
import Button from '../components/Button';
import {SelectList} from 'react-native-dropdown-select-list';
import Input from '../components/Input';

function Exchange({route}) {
  const {data, loading, error, get, post} = useHttps();
  const {abbreviation, exchangeMethod, rate} = route.params;
  const method =
    exchangeMethod === 'BUY'
      ? {title: 'SATIN AL', exchangeAccount: 'Alinacak Hesap'}
      : {title: 'SAT', exchangeAccount: 'Aktarilacak  Hesap'};

  const [selectlistData, setSelectlistData] = useState([]);
  const [amount, setAmount] = useState(null);
  const [exchangeAccount, setExchangeAccount] = useState(null);
  const [rate2, setRate2] = useState(null);

  function approve() {
    //post
  }

  async function getRate() {
    //get Exchange account types rate
    //rate2 yi kur setRate2
    //donusum orani hesapla ve rate2 ye kaydet setRate2( rate / rate2 )
    if (exchangeMethod === 'BUY') {
      //hesapta yeterli para kontrolu
    } else {
      //hesapta yeterli para kontrolu
    }
  }

  //sahip olunana hesaplar
  const Accounts = [
    {
      id: '1',
      accountTitle: 'vadesiz TL',
      connectedBranch: '19 BESIKTAS/IST',
      IBAN: 'TR 1234 5678 9012 3456',
      budget: 1598.04,
    },
    {
      id: '2',
      accountTitle: 'vadesiz EURO',
      connectedBranch: '21 TONATO/AKS',
      IBAN: 'TR 1234 5888 9012 3456',
      budget: 1888.04,
    },
    {
      id: '3',
      accountTitle: 'vadesiz USD',
      connectedBranch: '16 ISTIKLAL/KRM',
      IBAN: 'TR 1234 5678 9012 3456',
      budget: 1598.04,
    },
    {
      id: '4',
      accountTitle: 'vadesiz JPY',
      connectedBranch: '19 BESIKTAS/IST',
      IBAN: 'TR 1234 5678 9012 3456',
      budget: 1598.04,
    },
  ];

  async function setSelectListFormat() {
    //get data
    var arr = [];
    await Accounts.forEach(element => {
      arr.push({key: element.id, value: element.accountTitle});
    });
    setSelectlistData(arr);
  }

  if (selectlistData.length === 0) {
    // get('https://aaaah.free.beeceptor.com/accounts');
    setSelectListFormat();
  }

  return (
    <SafeAreaView>
      <Text>
        {abbreviation} {method.title}
      </Text>
      <Text>{method.exchangeAccount}</Text>
      <SelectList
        onSelect={getRate}
        setSelected={val => setExchangeAccount(val)}
        data={selectlistData}
        save="AccountTitle"
      />
      <Text>
        Oran ({abbreviation}/TL) : {rate}
      </Text>
      <Input label={'Miktar'} value={amount} onChangeText={setAmount} />
      <Text>Sonuc: {rate * Number(amount)} </Text>
      <Button text={'Onayla'} onPress={approve} />
    </SafeAreaView>
  );
}

export default Exchange;
