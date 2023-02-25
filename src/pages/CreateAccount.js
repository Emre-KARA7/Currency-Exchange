import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
//import {SelectList} from 'react-native-dropdown-select-list';
import useHttps from '../hooks/useHttps';
import Config from 'react-native-config';
import pagesStyles from './pages.styles';
import Button from '../components/Button';
import {useSelector} from 'react-redux'; //redux
import Dropdown from '../components/Dropdown';
import InfoCard from '../components/InfoCard';
import {useTranslation} from 'react-i18next'; //i18n

function CreateAccount({navigation}) {
  //
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  const {t} = useTranslation(); //i18n
  const [account_type, setAccount_type] = useState(null);
  const [branch_office, setBranch_office] = useState(null);
  const [currency, setCurrency] = useState(null);
  const {data, loading, error, post} = useHttps();
  const [UIBlock, setUIBlock] = useState(false);
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
  const [warn, setWarn] = useState(false);

  async function send() {
    if (account_type !== null && branch_office !== null && currency !== null) {
      setUIBlock(true);
      await post(Config.API_URL + 'createAccount', {
        account_type,
        currency,
        branch_office,
      });
    } else setWarn(true);
  }

  if (loading) return <InfoCard />;
  else if (warn) {
    return (
      <InfoCard
        onBtnPress={() => setWarn(false)}
        btnText={t('btn02', {ns: 'common'})}
        infoType={'WARNING'}
        infoHeader={t('infoHeader03', {ns: 'account'})}
        infoText={t('infoText03', {ns: 'account'})}
      />
    );
  } else if (error) {
    return (
      <InfoCard
        onBtnPress={() => navigation.popToTop()}
        btnText={t('btn02', {ns: 'common'})}
        infoType={'ERROR'}
        infoHeader={t('err', {ns: 'common'})}
        infoText={t('errText', {ns: 'common'})}
      />
    );
  } else if (data && data.data.status === 'account succesfully created') {
    return (
      <InfoCard
        onBtnPress={() => navigation.popToTop()}
        btnText={t('btn02', {ns: 'common'})}
        infoType={'SUCCESS'}
        infoHeader={t('infoHeader02', {ns: 'account'})}
        infoText={t('infoText02', {ns: 'account'})}
      />
    );
  } else if (data && data.data.status === 'account creation failed') {
    return (
      <InfoCard
        onBtnPress={() => navigation.popToTop()}
        btnText={t('btn02', {ns: 'common'})}
        infoType={'INFO'}
        infoHeader={t('infoHeader04', {ns: 'account'})}
        infoText={t('infoText04', {ns: 'account'})}
      />
    );
  }

  return (
    <SafeAreaView
      style={
        darkTheme
          ? pagesStyles.flexOnePaddingBG_dark
          : pagesStyles.flexOnePaddingBG
      }>
      <Text style={darkTheme ? pagesStyles.textA_dark : pagesStyles.textA}>
        Hesap Turu
      </Text>
      <Dropdown
        pleaceholder={t('placeholder01', {ns: 'account'})}
        data={listData[0]}
        setSelected={setAccount_type}
        save={'value'}
      />

      <Text style={darkTheme ? pagesStyles.textA_dark : pagesStyles.textA}>
        Para Birimi
      </Text>
      <Dropdown
        pleaceholder={t('placeholder02', {ns: 'account'})}
        data={listData[1]}
        setSelected={setCurrency}
        save={'value'}
      />

      <Text style={darkTheme ? pagesStyles.textA_dark : pagesStyles.textA}>
        Bagli Sube
      </Text>
      <Dropdown
        pleaceholder={t('placeholder03', {ns: 'account'})}
        data={listData[2]}
        setSelected={setBranch_office}
        save={'value'}
      />

      <View style={pagesStyles.rightBottom}>
        <Button text={'next'} onPress={send} disabled={UIBlock} />
      </View>
    </SafeAreaView>
  );
}

export default CreateAccount;
