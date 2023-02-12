import React, {useEffect} from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import useHttps from '../hooks/useHttps';

import Button from '../components/Button';
import AccountCard from '../components/AccountCard';

function Accounts({navigation}) {
  //
  const {data, loading, error, get} = useHttps();

  function goToCreateAccountScreen() {
    navigation.navigate('CreateAccountScreen');
  }

  useEffect(() => {
    get('https://aaaah.free.beeceptor.com/accounts');
  });

  return (
    <SafeAreaView>
      <Button text={'add account+'} onPress={goToCreateAccountScreen} />
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
