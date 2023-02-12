import React from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';

import Button from '../components/Button';
import AccountCard from '../components/AccountCard';

function Accounts({navigation}) {
  //
  function goToCreateAccountScreen() {
    navigation.navigate('CreateAccountScreen');
  }

  const DATA = [
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
    {
      id: '5',
      accountTitle: 'vadesiz KR',
      connectedBranch: '19 BESIKTAS/IST',
      IBAN: 'TR 1234 5678 9012 3456',
      budget: 1598.04,
    },
    {
      id: '6',
      accountTitle: 'vadesiz FTT',
      connectedBranch: '19 BESIKTAS/IST',
      IBAN: 'TR 1234 5678 9012 3456',
      budget: 1598.04,
    },
    {
      id: '7',
      accountTitle: 'vadesiz TL',
      connectedBranch: '19 BESIKTAS/IST',
      IBAN: 'TR 1234 5678 9012 3456',
      budget: 1598.04,
    },
    {
      id: '8',
      accountTitle: 'vadesiz EURO',
      connectedBranch: '21 TONATO/AKS',
      IBAN: 'TR 1234 5888 9012 3456',
      budget: 1888.04,
    },
    {
      id: '9',
      accountTitle: 'vadesiz USD',
      connectedBranch: '16 ISTIKLAL/KRM',
      IBAN: 'TR 1234 5678 9012 3456',
      budget: 1598.04,
    },
    {
      id: '10',
      accountTitle: 'vadesiz JPY',
      connectedBranch: '19 BESIKTAS/IST',
      IBAN: 'TR 1234 5678 9012 3456',
      budget: 1598.04,
    },
    {
      id: '11',
      accountTitle: 'vadesiz KR',
      connectedBranch: '19 BESIKTAS/IST',
      IBAN: 'TR 1234 5678 9012 3456',
      budget: 1598.04,
    },
    {
      id: '12',
      accountTitle: 'vadesiz FTT',
      connectedBranch: '19 BESIKTAS/IST',
      IBAN: 'TR 1234 5678 9012 3456',
      budget: 1598.04,
    },
  ];

  return (
    <SafeAreaView>
      <Button text={'add account+'} onPress={goToCreateAccountScreen} />
      <FlatList
        data={DATA}
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
