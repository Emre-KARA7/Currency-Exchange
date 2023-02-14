import React from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import HistoryCard from '../components/HistoryCard';

function History() {
  //
  const data = [];
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <HistoryCard
            exchangeType={null}
            dateTime={null}
            amount={null}
            accountName={null}
          />
        )}
        keyExtractor={item => item.id}
        //item seperator
      />
    </SafeAreaView>
  );
}

export default History;
