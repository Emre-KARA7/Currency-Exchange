import React, {useEffect, useCallback, useState} from 'react';
import {SafeAreaView, RefreshControl, FlatList} from 'react-native';
import useHttps from '../hooks/useHttps';
import pagesStyles from './pages.styles';
import AccountCard from '../components/AccountCard';
import {useSelector} from 'react-redux'; //redux
import InfoCard from '../components/InfoCard';
import Config from 'react-native-config';
import {useTranslation} from 'react-i18next'; //i18n

function Accounts({navigation}) {
  //
  const {data, loading, error, get} = useHttps();
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  const {t} = useTranslation(); //i18n
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
        btnText={t('btn02', {ns: 'common'})}
        infoHeader={t('err', {ns: 'common'})}
        infoText={t('errText01', {ns: 'account'})}
        onBtnPress={() => {
          get(Config.API_URL + 'accounts');
        }}
      />
    );
  } else if (data && data.status && data.status === 'no data') {
    return (
      <InfoCard
        infoType={'INFO'}
        btnText={t('btn02', {ns: 'common'})}
        infoHeader={t('infoHeader01', {ns: 'account'})}
        infoText={t('infoText01', {ns: 'account'})}
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
