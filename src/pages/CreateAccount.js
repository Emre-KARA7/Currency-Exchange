import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import useHttps from '../hooks/useHttps';
import Config from 'react-native-config';

import Button from '../components/Button';

function CreateAccount() {
  //
  const [account_type, setAccount_type] = useState(null);
  const [branch_office, setBranch_office] = useState(null);
  const [currency, setCurrency] = useState(null);
  const {data, loading, error, post} = useHttps();
  const listData = [
    [
      {key: '1', value: 'Vadesiz Hesap'},
      {key: '2', value: 'Vadeli', disabled: true},
      {key: '3', value: 'Altin', disabled: true},
    ],
    [
      {key: '0', value: 'TÜRK LİRASI'},
      {key: '1', value: 'ABD DOLARI'},
      {key: '2', value: 'AVUSTRALYA DOLARI'},
      {key: '3', value: 'DANİMARKA KRONU'},
      {key: '4', value: 'EURO'},
      {key: '5', value: 'İNGİLİZ STERLİNİ'},
      {key: '6', value: 'İSVİÇRE FRANGI'},
      {key: '7', value: 'İSVEÇ KRONU'},
      {key: '8', value: 'KANADA DOLARI'},
      {key: '9', value: 'KUVEYT DİNARI'},
      {key: '10', value: 'NORVEÇ KRONU'},
      {key: '11', value: 'SUUDİ ARABİSTAN RİYALİ'},
      {key: '12', value: 'JAPON YENİ'},
      {key: '13', value: 'BULGAR LEVASI'},
      {key: '14', value: 'RUMEN LEYİ'},
      {key: '15', value: 'RUS RUBLESİ'},
      {key: '16', value: 'İRAN RİYALİ'},
      {key: '17', value: 'ÇİN YUANI'},
      {key: '18', value: 'PAKİSTAN RUPİSİ'},
      {key: '19', value: 'KATAR RİYALİ'},
      {key: '20', value: 'GÜNEY KORE WONU'},
      {key: '21', value: 'AZERBAYCAN YENİ MANATI'},
      {key: '22', value: 'BİRLEŞİK ARAP EMİRLİKLERİ DİRHEMİ'},
    ],
    [
      {key: '1', value: '19 GALATA/IST'},
      {key: '2', value: '21 KADIKOY/IST', disabled: true},
      {key: '3', value: '1257 SERDIVAN/SAK', disabled: true},
    ],
  ];

  async function nextStep() {
    // validade
    await post(Config.API_URL + 'createAccount', {
      account_type,
      currency,
      branch_office,
    });
    if ((data && data.data.status === 'account succesfully created') || true) {
      //redirect info screen
    }
  }

  return (
    <SafeAreaView>
      <Text>CreateAccount</Text>
      <SelectList
        setSelected={val => setAccount_type(val)}
        data={listData[0]}
        save="value"
      />
      <SelectList
        setSelected={val => setCurrency(val)}
        data={listData[1]}
        save="value"
      />
      <SelectList
        setSelected={val => setBranch_office(val)}
        data={listData[2]}
        save="value"
      />
      <Button text={'next'} onPress={nextStep} />
    </SafeAreaView>
  );
}

export default CreateAccount;
