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

function History({navigation}) {
  //
  // const data = [
  //   {
  //     id: 1,
  //     dateTime: '5/12/2020, 6:50:21 PM',
  //     exchangeType: 'BUY',
  //     accountName: 'vadesiz TL',
  //     amount: 80.5,
  //   },
  //   {
  //     id: 2,
  //     dateTime: '5/12/2020, 6:50:21 PM',
  //     exchangeType: 'BUY',
  //     accountName: 'vadesiz TL',
  //     amount: 80.5,
  //   },
  // ];

  //
  const [refreshing, setRefreshing] = useState(false);
  const {StorageLoading, StorageError, storageGet} = useStorage();
  const [amount, setAmount] = useState('');
  const [account, setAccount] = useState(0);
  const [exchangeType, setExchangeType] = useState(0);
  const [dateTime, setDateTime] = useState(0);
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  const [filterAppearance, setFilterAppearance] = useState(null);
  const [data, setData] = useState(' ');

  useEffect(() => {
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
        {key: 1, value: 'AL'},
        {key: 2, value: 'SAT'},
        {key: 3, value: 'HEPSI'},
      ],
      [
        {key: 1, value: '7 gun'},
        {key: 2, value: '1 ay'},
        {key: 3, value: '3 ay'},
        {key: 4, value: '6 ay'},
        {key: 5, value: '1 yil'},
        {key: 6, value: '3 yil'},
        {key: 7, value: 'Tum zamanlar'},
      ],
    ];
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <View style={pagesStyles.flexRowCenter}>
          <Icon.Button
            style={pagesStyles.iconBtnOuterStyle}
            name="setting"
            iconStyle={pagesStyles.iconBtnStyle}
            onPress={() => navigation.navigate('SettingsScreen')}
          />
          <Icon.Button
            style={pagesStyles.iconBtnOuterStyle}
            name="filter"
            iconStyle={pagesStyles.iconBtnStyle}
            onPress={() => {
              setFilterAppearance(
                <View>
                  <Input
                    label={'Miktar'}
                    value={amount}
                    onChangeText={setAmount}
                  />
                  <Dropdown
                    setSelected={setAccount}
                    data={listFitlterData[0]}
                    save={'value'}
                    pleaceholder={'choose currency'}
                  />
                  <Dropdown
                    setSelected={setExchangeType}
                    data={listFitlterData[1]}
                    save={'value'}
                    pleaceholder={'choose log type'}
                  />
                  <Dropdown
                    setSelected={setDateTime}
                    data={listFitlterData[2]}
                    save={'value'}
                    pleaceholder={'choose date-time'}
                  />
                  <View style={pagesStyles.flexRowCenter}>
                    <Button text={'SIFIRLA'} onPress={() => {}} />
                    <Button
                      text={'UYGULA'}
                      onPress={() => {
                        setFilterAppearance(null);
                      }}
                    />
                  </View>
                </View>,
              );
            }}
          />
        </View>
      ),
    });
  }, [amount, navigation, setFilterAppearance]);

  if (data === ' ') {
    (async () => {
      setData('a');
      const a = await storageGet('history');
      setData(a);
    })();
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    (async () => {
      setData('a');
      const a = await storageGet('history');
      setData(a);
    })();
    setRefreshing(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
