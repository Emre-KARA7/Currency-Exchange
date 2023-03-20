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
import {useTranslation} from 'react-i18next'; //i18n

function Exchange({route, navigation}) {
  const {data, loading, error, get, post} = useHttps();
  const {StorageLoading, StorageError, storageSet, storageGet} = useStorage();
  const {abbreviation, exchangeMethod, dataRates} = route.params;
  const [history, setHistory] = useState(' ');
  const [rate, setRate] = useState(0);
  const [selectlistData, setSelectlistData] = useState([]);
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  const {t} = useTranslation(); //i18n
  const [amount, setAmount] = useState(null);
  const [exchangeAccount, setExchangeAccount] = useState(null);
  const [warn, setWarn] = useState(false);
  const [UIBlock, setUIBlock] = useState(false);
  const method =
    exchangeMethod === 'BUY'
      ? {
          title: t('btn01', {ns: 'watchlist'}),
          exchangeAccount: t('account1', {ns: 'watchlist'}),
        }
      : {
          title: t('btn02', {ns: 'watchlist'}),
          exchangeAccount: t('account2', {ns: 'watchlist'}),
        };

  console.log(dataRates);
  useEffect(() => {
    (async () => {
      if (history === ' ') {
        const h = await storageGet('history');
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
    } else setWarn(true);
  }

  useEffect(() => {
    if (data && data.data.status === 'exchange success') {
      if (history === ' ') {
        setHistory([
          {
            exchangeType: exchangeMethod === 'BUY' ? 1 : 2, //1Buy 2Sell
            amount: amount,
            dateTime: new Date(),
            id: 0,
            accountName: abbreviation,
          },
        ]);
      } else {
        setHistory([
          {
            exchangeType: exchangeMethod === 'BUY' ? 1 : 2, //1Buy 2Sell
            amount: amount,
            dateTime: new Date(),
            id: history.length,
            accountName: abbreviation,
          },
          ...history,
        ]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  async function getRate(abbrv2) {
    //
    const r1 = dataRates.find(e => e.abbrv === abbreviation);
    const r2 =
      abbrv2 == 25
        ? {
            id: 25,
            ForexBuying: 1,
            ForexSelling: 1,
          }
        : dataRates.find(e => e.id === abbrv2);
    console.log('r1: ', r1, ' r2: ', r2);
    //
    if (exchangeMethod === 'BUY') {
      setRate(r1.ForexBuying / r2.ForexBuying);
    } else {
      setRate(r2.ForexSelling / r1.ForexSelling);
    }
  }

  async function setSelectListFormat() {
    //get data
    var arr = [];
    await dataRates.forEach(element => {
      arr.push({key: element.id, value: element.Isim});
    });
    setSelectlistData([...arr, {key: '25', value: 'TURK LIRASI'}]);
  }

  if (selectlistData.length === 0) {
    setSelectListFormat();
  }

  if (loading || StorageLoading) return <InfoCard />;
  else if (warn) {
    return (
      <InfoCard
        onBtnPress={() => setWarn(false)}
        btnText={t('btn02', {ns: 'common'})}
        infoType={'WARNING'}
        infoHeader={t('warnHeader', {ns: 'watchlist'})}
        infoText={t('warnText', {ns: 'watchlist'})}
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
  } else if (StorageError) {
    return (
      <InfoCard
        onBtnPress={() => navigation.popToTop()}
        btnText={t('btn02', {ns: 'common'})}
        infoType={'ERROR'}
        infoHeader={t('infoHeader1', {ns: 'watchlist'})}
        infoText={t('infoText1', {ns: 'watchlist'})}
      />
    );
  } else if (data && data.data.status === 'exchange failed') {
    return (
      <InfoCard
        onBtnPress={() => navigation.popToTop()}
        btnText={t('btn02', {ns: 'common'})}
        infoType={'INFO'}
        infoHeader={t('infoHeader2', {ns: 'watchlist'})}
        infoText={t('infoText2', {ns: 'watchlist'})}
      />
    );
  } else if (data && data.data.status === 'exchange success') {
    return (
      <InfoCard
        onBtnPress={() => navigation.popToTop()}
        btnText={t('btn02', {ns: 'common'})}
        infoType={'SUCCESS'}
        infoHeader={t('infoHeader1', {ns: 'watchlist'})}
        infoText={t('infoText3', {ns: 'watchlist'})}
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
        setSelected={e => {
          setExchangeAccount(e);
          console.log(e);
          getRate(e);
        }}
        save="AccountTitle"
        onSelect={() => {}} //getRate
        pleaceholder={t('label01', {ns: 'watchlist'})}
      />

      <Text style={darkTheme ? pagesStyles.textA_dark : pagesStyles.textA}>
        Oran: {rate}
      </Text>
      <Input
        label={t('label02', {ns: 'watchlist'})}
        value={amount}
        onChangeText={setAmount}
      />

      <Text style={darkTheme ? pagesStyles.textA_dark : pagesStyles.textA}>
        Sonuc:{rate * amount}
      </Text>

      <View style={pagesStyles.rightBottom}>
        <Button
          text={t('btn03', {ns: 'watchlist'})}
          onPress={approve}
          disabled={UIBlock}
          colorsetNo={5}
        />
      </View>
    </SafeAreaView>
  );
}

export default Exchange;
