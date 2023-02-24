import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import useHttps from '../hooks/useHttps';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';
import Input from '../components/Input';
import {useSelector} from 'react-redux'; //redux
import pagesStyles from './pages.styles';
import Config from 'react-native-config';
import useStorage from '../hooks/useStorage';
import InfoCard from '../components/InfoCard';

function Exchange({route, navigation}) {
  const {data, loading, error, get, post} = useHttps();
  const {StorageLoading, StorageError, storageSet, storageGet} = useStorage();
  const {abbreviation, exchangeMethod, rate} = route.params;
  const [history, setHistory] = useState(' ');
  const [selectlistData, setSelectlistData] = useState([]);
  const [rate2, setRate2] = useState(null);
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  const [amount, setAmount] = useState(null);
  const [exchangeAccount, setExchangeAccount] = useState(null);
  const [warn, setWarn] = useState(false);
  const [UIBlock, setUIBlock] = useState(false);

  const method =
    exchangeMethod === 'BUY'
      ? {title: 'SATIN AL', exchangeAccount: 'Alinacak Hesap'}
      : {title: 'SAT', exchangeAccount: 'Aktarilacak  Hesap'};

  useEffect(() => {
    (async () => {
      if (history === ' ') {
        const h = await storageGet('history');
        console.log('storage', h);
        if (h) setHistory(h);
      } else {
        await storageSet('history', history);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  async function approve() {
    setUIBlock(true);
    if (exchangeAccount !== null && amount !== null) {
      await post(Config.API_URL + 'exchange', {
        method: exchangeMethod,
        amount: amount,
        account1: abbreviation,
        account2: exchangeAccount,
      });
      if ((data && data.data.status === 'exchange success') || true) {
        if (history === ' ') {
          setHistory([
            {
              exchangeType: exchangeMethod,
              amount: amount,
              dateTime: Date.now(),
              id: 0,
              accountName: 'vadesiz ' + abbreviation,
            },
          ]);
        } else {
          setHistory([
            {
              exchangeType: exchangeMethod,
              amount: amount,
              dateTime: Date.now(),
              id: history.length,
              accountName: 'vadesiz ' + abbreviation,
            },
            ...history,
          ]);
        }
      }
    } else setWarn(true);
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
  console.log('storage  :', StorageLoading, '      https  :', loading);
  if (loading || StorageLoading) return <InfoCard />;
  else if (warn) {
    return (
      <InfoCard
        onBtnPress={() => setWarn(false)}
        btnText={'Tamam'}
        infoType={'WARNING'}
        infoHeader={'Eksik Form'}
        infoText={'formdaki tum alanlari doldurdugunuza emin olunuz'}
      />
    );
  } else if (error) {
    return (
      <InfoCard
        onBtnPress={() => navigation.popToTop()}
        btnText={'Tamam'}
        infoType={'ERROR'}
        infoHeader={'Hata'}
        infoText={
          'Talebiniz gerceklestirilirken bir hata olustu lutfen daha sonra tekrar deneyin'
        }
      />
    );
  } else if (StorageError) {
    return (
      <InfoCard
        onBtnPress={() => navigation.popToTop()}
        btnText={'Tamam'}
        infoType={'ERROR'}
        infoHeader={'Islem Basarili'}
        infoText={
          'Islem basarili ancak gecmise kayit esnasinda bir hata olustu'
        }
      />
    );
  } else if (data && data.data.status === 'exchange failed') {
    return (
      <InfoCard
        onBtnPress={() => navigation.popToTop()}
        btnText={'Tamam'}
        infoType={'INFO'}
        infoHeader={'Islem Reddedildi'}
        infoText={
          'Isleminiz reddedildi, bilgilerinizden emin olduktan sonra tekrar deneyiniz, sorunun devam etmesi halinde musteri hizmetleriyle iletisime geciniz'
        }
      />
    );
  } else if (data && data.data.status === 'exchange success') {
    return (
      <InfoCard
        onBtnPress={() => navigation.popToTop()}
        btnText={'Tamam'}
        infoType={'SUCCESS'}
        infoHeader={'Islem Basarili'}
        infoText={
          'Islem Basarili, Islem Kaydinizi Gecmis sayfasinda gorebilirsiniz'
        }
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
      <Text style={pagesStyles.exchangeTitle}>
        {abbreviation} {method.title}
      </Text>

      <Text style={darkTheme ? pagesStyles.textA_dark : pagesStyles.textA}>
        {method.exchangeAccount}
      </Text>
      <Dropdown
        data={selectlistData}
        setSelected={setExchangeAccount}
        save="AccountTitle"
        onSelect={getRate}
        pleaceholder={'lutfen alinacak para turu secin'}
      />

      <Text style={darkTheme ? pagesStyles.textA_dark : pagesStyles.textA}>
        Oran ({abbreviation}/TL) : {rate}
      </Text>
      <Input label={'Miktar'} value={amount} onChangeText={setAmount} />

      <Text style={darkTheme ? pagesStyles.textA_dark : pagesStyles.textA}>
        Sonuc: {rate * Number(amount)}{' '}
      </Text>

      <View style={pagesStyles.rightBottom}>
        <Button text={'Onayla'} onPress={approve} disabled={UIBlock} />
      </View>
    </SafeAreaView>
  );
}

export default Exchange;
