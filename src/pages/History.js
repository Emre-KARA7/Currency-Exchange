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
import LinearGradient from 'react-native-linear-gradient';

function History({navigation}) {
  //
  const [refreshing, setRefreshing] = useState(false);
  const {StorageLoading, StorageError, storageGet} = useStorage();
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  const {t} = useTranslation(); //i18n
  const [filterAppearance, setFilterAppearance] = useState(null);
  const [data, setData] = useState(' ');
  const [data2, setData2] = useState(null);
  const dateTimeAsDays = [7, 30, 91.25, 182.5, 365, 1096];
  const [filterParams, setFilterParams] = useState({
    account: null,
    amount: null,
    exchangeType: 3,
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
    ],
    [
      {key: 1, value: t('type1', {ns: 'history'})}, //buy
      {key: 2, value: t('type2', {ns: 'history'})}, //sell
      {key: 3, value: t('type3', {ns: 'history'})}, //all
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
  function filterPanel() {
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={darkTheme ? ['#303F9F', '#004D40'] : ['#BBDEFB', '#E0F2F1']}
        style={pagesStyles.history_filter_container}>
        <Input //amount
          label={t('amount', {ns: 'history'})}
          value={filterParams.amount}
          onChangeText={val =>
            setFilterParams(pre => ({
              ...pre,
              amount: val,
            }))
          }
        />
        <Dropdown //currency
          setSelected={val =>
            setFilterParams(pre => ({
              ...pre,
              account: val,
            }))
          }
          data={listFitlterData[0]}
          save={'value'}
          pleaceholder={t('label01', {ns: 'history'})}
        />
        <Dropdown //exchange type
          setSelected={val =>
            setFilterParams(pre => ({
              ...pre,
              exchangeType: val,
            }))
          }
          data={listFitlterData[1]}
          save={'key'}
          pleaceholder={t('label02', {ns: 'history'})}
        />
        <Dropdown //date
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
          <Button
            text={t('reset', {ns: 'history'})}
            onPress={resetFilterParams}
            colorsetNo={3}
          />
          <Button
            text={t('apply', {ns: 'history'})}
            onPress={() => {
              setFilterAppearance(null);
              // (async () => {
              //   const a = await storageGet('history');
              //   setData(a);
              // })();
            }}
            colorsetNo={4}
          />
        </View>
      </LinearGradient>
    );
  } // VIEW for filter options panel
  //
  useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <View style={pagesStyles.flexRowCenter}>
          <Icon.Button
            style={
              darkTheme
                ? pagesStyles.dark_iconBtnOuterStyle
                : pagesStyles.iconBtnOuterStyle
            }
            name="setting"
            iconStyle={
              darkTheme
                ? pagesStyles.dark_iconBtnStyle
                : pagesStyles.iconBtnStyle
            }
            onPress={() => navigation.navigate('SettingsScreen')}
          />
          <Icon.Button
            style={
              darkTheme
                ? pagesStyles.dark_iconBtnOuterStyle
                : pagesStyles.iconBtnOuterStyle
            }
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
  }, [navigation, setFilterAppearance, darkTheme]); //set header ICONS with new functionalities
  useEffect(() => {
    if (data === ' ') {
      (async () => {
        const a = await storageGet('history');
        setData(a);
      })();
    }
    setData2(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]); //FIRST data load

  function resetFilterParams() {
    setFilterParams({
      account: null,
      amount: null,
      exchangeType: 3,
      dateTime: null,
    });
    setFilterAppearance(null);
    onRefresh();
  } //RESET filter

  useEffect(() => {
    if (data && data !== ' ') {
      console.log('params', filterParams);
      setData2(
        data.filter(item => {
          return (
            (filterParams.exchangeType !== 3
              ? filterParams.exchangeType === item.exchangeType
                ? true
                : false
              : true) &&
            (filterParams.amount
              ? filterParams.amount === item.amount
              : true) &&
            (filterParams.account
              ? filterParams.account === item.accountName
              : true) &&
            (filterParams.dateTime
              ? new Date(Date.parse(item.dateTime)) >
                new Date(
                  Date.now() -
                    86400000 * dateTimeAsDays[filterParams.dateTime - 1],
                )
              : true)
          );
        }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterParams]); //FILTER data acording to filterParams

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    (async () => {
      const a = await storageGet('history');
      setData(a);
    })();
    setRefreshing(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // //REFRESH data

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
        data={data2}
        renderItem={({item}) => (
          <HistoryCard
            exchangeTypeAsNum={item.exchangeType}
            exchangeType={
              item.exchangeType === 1
                ? t('type1', {ns: 'history'})
                : t('type2', {ns: 'history'})
            }
            dateTime={new Date(Date.parse(item.dateTime)).toLocaleString()}
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
