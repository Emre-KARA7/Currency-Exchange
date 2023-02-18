import React, {useEffect} from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import useHttps from '../hooks/useHttps';
import pagesStyles from './pages.styles';
import AccountCard from '../components/AccountCard';
import {useSelector} from 'react-redux'; //redux

function Accounts({navigation}) {
  //
  const {data, loading, error, get} = useHttps();
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux

  useEffect(() => {
    get('https://aaaah.free.beeceptor.com/accounts');
  });

  return (
    <SafeAreaView
      style={darkTheme ? pagesStyles.flexOne_bg_dark : pagesStyles.flexOne_bg}>
      <FlatList
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
