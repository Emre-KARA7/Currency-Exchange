import React, {useEffect, useCallback, useState} from 'react';
import {SafeAreaView, RefreshControl, FlatList} from 'react-native';
import useHttps from '../hooks/useHttps';
import pagesStyles from './pages.styles';
import AccountCard from '../components/AccountCard';
import {useSelector} from 'react-redux'; //redux
import InfoCard from '../components/InfoCard';
import Config from 'react-native-config';

function Accounts({navigation}) {
  //
  const {data, loading, error, get} = useHttps();
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  const [refreshing, setRefreshing] = useState(false);
  const [isFirst, setIsFirst] = useState(true);

  if (isFirst) {
    setIsFirst(false);
    get(Config.API_URL + 'accounts');
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    get(Config.API_URL + 'accounts');
    setRefreshing(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading || refreshing) {
    return <InfoCard />;
  } else if (error) {
    return (
      <InfoCard
        infoType={'ERROR'}
        btnText={'Tamam'}
        infoHeader={'Hata'}
        infoText={'Hesap Bilgileri alinamadi. lutfen daha sonra tekrar deneyin'}
        onBtnPress={() => {
          get(Config.API_URL + 'accounts');
        }}
      />
    );
  } else if (data && data.status && data.status === 'no data') {
    return (
      <InfoCard
        infoType={'INFO'}
        btnText={'Tamam'}
        infoHeader={'Hesabiniz Bulunmamaktadir'}
        infoText={
          'Bu ekreanda hesaplariniz goruntulenir. Hic hesabiniz bulunmamaktadir. Yukaridaki + simgesine tiklayarak hesap olu;turabilirsiniz'
        }
        onBtnPress={() => {
          get(Config.API_URL + 'accounts');
        }}
      />
    );
  }
  return (
    <SafeAreaView
      style={darkTheme ? pagesStyles.flexOne_bg_dark : pagesStyles.flexOne_bg}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={data}
        renderItem={({item}) => (
          <AccountCard
            accountTitle={item.accountTitle}
            IBAN={item.IBAN}
            budget={item.budget}
            connectedBranch={item.connectedBranch}
          />
        )}
        keyExtractor={item => item.id}
        //item seperator
      />
    </SafeAreaView>
  );
}

export default Accounts;
