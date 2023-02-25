import React, {useState, useEffect} from 'react';
import {SafeAreaView, RefreshControl, View, FlatList} from 'react-native';
import Button from '../components/Button';
import HistoryCard from '../components/HistoryCard';
import Input from '../components/Input';
import pagesStyles from './pages.styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux'; //redux
import Dropdown from '../components/Dropdown';
import useStorage from '../hooks/useStorage';
import InfoCard from '../components/InfoCard';
import {useTranslation} from 'react-i18next'; //i18n

function History({navigation}) {
  //
  const [refreshing, setRefreshing] = useState(false);
  const {StorageLoading, StorageError, storageGet} = useStorage();
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  const {t} = useTranslation(); //i18n
  const [filterAppearance, setFilterAppearance] = useState(null);
  const data = [
    {
      key: 1,
      dateTime: '2/21/2023, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz TL',
      amount: '80.5',
    },
    {
      key: 2,
      dateTime: '2/20/2023, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz AED',
      amount: '40',
    },
    {
      key: 3,
      dateTime: '2/18/2023, 6:50:21 PM',
      exchangeType: 'SELL',
      accountName: 'vadesiz SAR',
      amount: '80',
    },
    {
      key: 4,
      dateTime: '2/12/2023, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz SEK',
      amount: '83',
    },
    {
      key: 5,
      dateTime: '2/1/2023, 6:50:21 PM',
      exchangeType: 'SELL',
      accountName: 'vadesiz USD',
      amount: '50',
    },
    {
      key: 6,
      dateTime: '1/30/2023, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz TL',
      amount: '85964',
    },
    {
      key: 7,
      dateTime: '1/20/2023, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz BGN',
      amount: '85',
    },
    {
      key: 8,
      dateTime: '1/12/2023, 6:50:21 PM',
      exchangeType: 'SELL',
      accountName: 'vadesiz NOK',
      amount: '804',
    },
    {
      key: 9,
      dateTime: '1/10/2023, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz DKK',
      amount: '95',
    },
    {
      key: 10,
      dateTime: '1/2/2023, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz CHF',
      amount: '52',
    },
    {
      key: 11,
      dateTime: '12/20/2022, 6:50:21 PM',
      exchangeType: 'SELL',
      accountName: 'vadesiz JPY',
      amount: '123',
    },
    {
      key: 12,
      dateTime: '12/19/2022, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz TL',
      amount: '8',
    },
    {
      key: 13,
      dateTime: '12/17/2022, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz QAR',
      amount: '45465',
    },
    {
      key: 14,
      dateTime: '12/15/2022, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz IRR',
      amount: '741',
    },
    {
      key: 15,
      dateTime: '12/14/2022, 6:50:21 PM',
      exchangeType: 'SELL',
      accountName: 'vadesiz KWD',
      amount: '753',
    },
    {
      key: 16,
      dateTime: '12/13/2022, 6:50:21 PM',
      exchangeType: 'SELL',
      accountName: 'vadesiz KRW',
      amount: '159',
    },
    {
      key: 17,
      dateTime: '12/12/2022, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz AZN',
      amount: '2468',
    },
    {
      key: 18,
      dateTime: '12/1/2022, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz AED',
      amount: '84.1',
    },
    {
      key: 19,
      dateTime: '12/10/2022, 6:50:21 PM',
      exchangeType: 'SELL',
      accountName: 'vadesiz BGN',
      amount: '2356',
    },
    {
      key: 20,
      dateTime: '12/7/2022, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz CNY',
      amount: '741',
    },
    {
      key: 21,
      dateTime: '12/5/2022, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz CNY',
      amount: '9',
    },
    {
      key: 22,
      dateTime: '12/2/2022, 6:50:21 PM',
      exchangeType: 'SELL',
      accountName: 'vadesiz TL',
      amount: '8563',
    },
    {
      key: 23,
      dateTime: '11/12/2022, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz DKK ',
      amount: '8.5',
    },
    {
      key: 24,
      dateTime: '10/22/2022, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz PKR',
      amount: '462',
    },
    {
      key: 25,
      dateTime: '10/13/2022, 6:50:21 PM',
      exchangeType: 'SELL',
      accountName: 'vadesiz NOK',
      amount: '854',
    },
    {
      key: 26,
      dateTime: '10/8/2022, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz TL',
      amount: '5',
    },
    {
      key: 27,
      dateTime: '9/29/2022, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz EUR',
      amount: '8523',
    },
    {
      key: 28,
      dateTime: '9/24/2022, 6:50:21 PM',
      exchangeType: 'SELL',
      accountName: 'vadesiz AED',
      amount: '87',
    },
    {
      key: 29,
      dateTime: '9/17/2022, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz RON',
      amount: '165',
    },
    {
      key: 30,
      dateTime: '9/13/2022, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz CAD',
      amount: '80.5',
    },
    {
      key: 31,
      dateTime: '9/9/2022, 6:50:21 PM',
      exchangeType: 'SELL',
      accountName: 'vadesiz CHF',
      amount: '804',
    },
    {
      key: 32,
      dateTime: '9/6/2022, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz DKK',
      amount: '8065',
    },
    {
      key: 33,
      dateTime: '12/7/2021, 6:50:21 PM',
      exchangeType: 'SELL',
      accountName: 'vadesiz IRR',
      amount: '325',
    },
    {
      key: 34,
      dateTime: '12/4/2021, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz CNY',
      amount: '1',
    },
    {
      key: 35,
      dateTime: '11/27/2021, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz AZN',
      amount: '8345',
    },
    {
      key: 36,
      dateTime: '11/26/2021, 6:50:21 PM',
      exchangeType: 'SELL',
      accountName: 'vadesiz NOK',
      amount: '8668',
    },
    {
      key: 37,
      dateTime: '11/22/2021, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz QAR',
      amount: '646',
    },
    {
      key: 38,
      dateTime: '11/13/2021, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz TL',
      amount: '6465',
    },
    {
      key: 39,
      dateTime: '10/14/2021, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz SAR',
      amount: '87946',
    },
    {
      key: 40,
      dateTime: '10/12/2021, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz SEK',
      amount: '8086',
    },
    {
      key: 41,
      dateTime: '10/11/2021, 6:50:21 PM',
      exchangeType: 'SELL',
      accountName: 'vadesiz SED',
      amount: '4455',
    },
    {
      key: 42,
      dateTime: '9/19/2021, 6:50:21 PM',
      exchangeType: 'SELL',
      accountName: 'vadesiz KWD',
      amount: '55',
    },
    {
      key: 43,
      dateTime: '9/13/2021, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz SEK',
      amount: '543',
    },
    {
      key: 44,
      dateTime: '9/12/2021, 6:50:21 PM',
      exchangeType: 'SELL',
      accountName: 'vadesiz TL',
      amount: '876',
    },
    {
      key: 45,
      dateTime: '9/5/2021, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz KRW',
      amount: '5454',
    },
    {
      key: 46,
      dateTime: '9/1/2021, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz AED',
      amount: '887',
    },
    {
      key: 47,
      dateTime: '8/27/2021, 6:50:21 PM',
      exchangeType: 'SELL',
      accountName: 'vadesiz USD',
      amount: '534',
    },
    {
      key: 48,
      dateTime: '8/20/2021, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz USD',
      amount: '855',
    },
    {
      key: 49,
      dateTime: '8/16/2021, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz PKR',
      amount: '885',
    },
    {
      key: 50,
      dateTime: '8/5/2021, 6:50:21 PM',
      exchangeType: 'SELL',
      accountName: 'vadesiz IRR',
      amount: '885',
    },
    {
      key: 51,
      dateTime: '8/4/2021, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz RON',
      amount: '80.5',
    },
    {
      key: 52,
      dateTime: '7/12/2021, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz AUD',
      amount: '8455',
    },
    {
      key: 53,
      dateTime: '6/30/2021, 6:50:21 PM',
      exchangeType: 'SELL',
      accountName: 'vadesiz GBP',
      amount: '4.5',
    },
    {
      key: 54,
      dateTime: '6/27/2021, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz NOK',
      amount: '865',
    },
    {
      key: 55,
      dateTime: '6/22/2021, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz KRW',
      amount: '806',
    },
    {
      key: 56,
      dateTime: '6/12/2021, 6:50:21 PM',
      exchangeType: 'SELL',
      accountName: 'vadesiz JPY',
      amount: '854',
    },
    {
      key: 57,
      dateTime: '6/1/2021, 6:50:21 PM',
      exchangeType: 'SELL',
      accountName: 'vadesiz TL',
      amount: '8975',
    },
    {
      key: 58,
      dateTime: '5/26/2021, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz CAD',
      amount: '89.5',
    },
    {
      key: 59,
      dateTime: '5/17/2021, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz BGN',
      amount: '545',
    },
    {
      key: 60,
      dateTime: '5/15/2021, 6:50:21 PM',
      exchangeType: 'SELL',
      accountName: 'vadesiz USD',
      amount: '84.9',
    },
    {
      key: 61,
      dateTime: '5/12/2021, 6:50:21 PM',
      exchangeType: 'SELL',
      accountName: 'vadesiz TL',
      amount: '80',
    },
    {
      key: 62,
      dateTime: '4/20/2021, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz SEK',
      amount: '805',
    },
    {
      key: 63,
      dateTime: '4/18/2021, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz RUB',
      amount: '5',
    },
    {
      key: 64,
      dateTime: '4/4/2021, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz DKK',
      amount: '534',
    },
    {
      key: 65,
      dateTime: '3/28/2021, 6:50:21 PM',
      exchangeType: 'SELL',
      accountName: 'vadesiz IRR',
      amount: '806',
    },
    {
      key: 66,
      dateTime: '3/1/2021, 6:50:21 PM',
      exchangeType: 'SELL',
      accountName: 'vadesiz AZN',
      amount: '863',
    },
    {
      key: 67,
      dateTime: '2/12/2021, 6:50:21 PM',
      exchangeType: 'SELL',
      accountName: 'vadesiz CNY',
      amount: '835',
    },
    {
      key: 68,
      dateTime: '2/9/2021, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz TL',
      amount: '85',
    },
    {
      key: 69,
      dateTime: '1/25/2021, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz SEK',
      amount: '8353',
    },
    {
      key: 70,
      dateTime: '1/12/2021, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz NOK',
      amount: '8865',
    },
    {
      key: 71,
      dateTime: '12/12/2020, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz TL',
      amount: '8555',
    },
    {
      key: 72,
      dateTime: '11/12/2020, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz USD',
      amount: '80.65',
    },
    {
      key: 73,
      dateTime: '5/12/2020, 6:50:21 PM',
      exchangeType: 'SELL',
      accountName: 'vadesiz TL',
      amount: '80',
    },
    {
      key: 74,
      dateTime: '1/12/2020, 6:50:21 PM',
      exchangeType: 'SELL',
      accountName: 'vadesiz KRW',
      amount: '805',
    },
    {
      key: 75,
      dateTime: '5/12/2019, 6:50:21 PM',
      exchangeType: 'SELL',
      accountName: 'vadesiz NOK',
      amount: '853',
    },
    {
      key: 76,
      dateTime: '1/12/2019, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz TL',
      amount: '863',
    },
    {
      key: 77,
      dateTime: '11/12/2018, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz PKR',
      amount: '6355',
    },
    {
      key: 78,
      dateTime: '7/12/2018, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz QAR',
      amount: '6626',
    },
    {
      key: 79,
      dateTime: '5/12/2018, 6:50:21 PM',
      exchangeType: 'SELL',
      accountName: 'vadesiz SAR',
      amount: '6366',
    },
    {
      key: 80,
      dateTime: '5/12/2017, 6:50:21 PM',
      exchangeType: 'BUY',
      accountName: 'vadesiz SAR',
      amount: '8066',
    },
  ];
  //  const [data, setData] = useState(' ');
  const [filterParams, setFilterParams] = useState({
    account: null,
    amount: null,
    exchangeType: null,
    dateTime: null,
  });
  const listFitlterData = [
    [
      {key: 1, value: 'TL'},
      {key: 2, value: 'USD'},
      {key: 3, value: 'EUR'},
      {key: 4, value: 'JPY'},
      {key: 5, value: 'AUD'},
      {key: 6, value: 'DKK'},
      {key: 7, value: 'GBP'},
      {key: 8, value: 'CHF'},
      {key: 9, value: 'SEK'},
      {key: 10, value: 'CAD'},
      {key: 11, value: 'KWD'},
      {key: 12, value: 'NOK'},
      {key: 13, value: 'SAR'},
      {key: 14, value: 'BGN'},
      {key: 15, value: 'RON'},
      {key: 16, value: 'RUB'},
      {key: 17, value: 'IRR'},
      {key: 18, value: 'CNY'},
      {key: 19, value: 'PKR'},
      {key: 20, value: 'QAR'},
      {key: 21, value: 'KRW'},
      {key: 22, value: 'AZN'},
      {key: 23, value: 'AED'},
      {key: 24, value: 'HEPSI'},
    ],
    [
      {key: 1, value: t('type1', {ns: 'history'})},
      {key: 2, value: t('type2', {ns: 'history'})},
      {key: 3, value: t('type3', {ns: 'history'})},
    ],
    [
      {key: 1, value: t('time1', {ns: 'history'})},
      {key: 2, value: t('time2', {ns: 'history'})},
      {key: 3, value: t('time3', {ns: 'history'})},
      {key: 4, value: t('time4', {ns: 'history'})},
      {key: 5, value: t('time5', {ns: 'history'})},
      {key: 6, value: t('time6', {ns: 'history'})},
      {key: 7, value: t('time7', {ns: 'history'})},
    ],
  ];
  //
  //////////////////////////////////////////////////////////////////////////////////
  // filter options panel view
  function filterPanel() {
    return (
      <View>
        <Input
          label={t('amount', {ns: 'history'})}
          value={filterParams.amount}
          onChangeText={val =>
            setFilterParams(pre => ({
              ...pre,
              amount: val,
            }))
          }
        />
        <Dropdown
          setSelected={val =>
            setFilterParams(pre => ({
              ...pre,
              account: val,
            }))
          }
          data={listFitlterData[0]}
          save={'key'}
          pleaceholder={t('label01', {ns: 'history'})}
        />
        <Dropdown
          setSelected={val =>
            setFilterParams(pre => ({
              ...pre,
              exchangeType: val,
            }))
          }
          data={listFitlterData[1]}
          save={'value'}
          pleaceholder={t('label02', {ns: 'history'})}
        />
        <Dropdown
          setSelected={val =>
            setFilterParams(pre => ({
              ...pre,
              dateTime: val,
            }))
          }
          data={listFitlterData[2]}
          save={'key'}
          pleaceholder={t('label03', {ns: 'history'})}
        />
        <View style={pagesStyles.flexRowCenter}>
          <Button text={t('reset', {ns: 'history'})} onPress={() => {}} />
          <Button
            text={t('apply', {ns: 'history'})}
            onPress={() => {
              setFilterAppearance(null);
              //applyFilter();
            }}
          />
        </View>
      </View>
    );
  }

  //filter data acording to filterParams+
  useEffect(() => {
    console.log(filterParams);
    console.log(
      data.filter(item => {
        return (
          (filterParams.amount ? filterParams.amount === item.amount : true) &&
          (filterParams.exchangeType
            ? filterParams.exchangeType === item.exchangeType
            : true)
        );
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterParams]);

  //set header icons new functionalities
  useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <View style={pagesStyles.flexRowCenter}>
          <Icon.Button
            style={pagesStyles.iconBtnOuterStyle}
            name="setting"
            iconStyle={
              darkTheme
                ? pagesStyles.dark_iconBtnStyle
                : pagesStyles.iconBtnStyle
            }
            onPress={() => navigation.navigate('SettingsScreen')}
          />
          <Icon.Button
            style={pagesStyles.iconBtnOuterStyle}
            name="filter"
            iconStyle={
              darkTheme
                ? pagesStyles.dark_iconBtnStyle
                : pagesStyles.iconBtnStyle
            }
            onPress={() => {
              setFilterAppearance(filterPanel);
            }}
          />
        </View>
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation, setFilterAppearance]);

  // //first data load
  // if (data === ' ') {
  //   (async () => {
  //     setData('a');
  //     const a = await storageGet('history');
  //     setData(a);
  //   })();
  // }

  // //refresh data
  const onRefresh = React.useCallback(() => {
    //   setRefreshing(true);
    //   (async () => {
    //     setData('a');
    //     const a = await storageGet('history');
    //     setData(a);
    //   })();
    //   setRefreshing(false);
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (StorageLoading) return <InfoCard />;
  else if (StorageError) {
    return (
      <InfoCard
        btnText={t('btn02', {ns: 'common'})}
        infoText={t('errText', {ns: 'history'})}
        infoHeader={t('errHeader', {ns: 'history'})}
        infoType={'ERROR'}
        //onBtnPress={() => {setData(' ')}}
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
      {filterAppearance}
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={data}
        renderItem={({item}) => (
          <HistoryCard
            exchangeType={item.exchangeType}
            dateTime={item.dateTime}
            amount={item.amount}
            accountName={item.accountName}
          />
        )}
        keyExtractor={item => item.id}
        //item seperator
      />
    </SafeAreaView>
  );
}

export default History;
