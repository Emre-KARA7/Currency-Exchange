import React from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import pagesStyles from './pages.styles';
import EditWatchlistCard from '../components/EditWatchlistCard';
import {useSelector} from 'react-redux'; //redux

function EditWatchlist() {
  //
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux

  const data = [
    {id: 1, name: 'ABD DOLARI', abbrv: 'USD'},
    {id: 2, name: 'AVUSTRALYA DOLARI', abbrv: 'AVD'},
    {id: 3, name: 'DANİMARKA KRONU', abbrv: 'DKR'},
    {id: 4, name: 'EURO', abbrv: 'EUR'},
    {id: 5, name: 'İNGİLİZ STERLİNİ', abbrv: 'STR'},
  ];

  return (
    <SafeAreaView
      style={
        darkTheme
          ? pagesStyles.flexOnePaddingBG_dark
          : pagesStyles.flexOnePaddingBG
      }>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <EditWatchlistCard name={item.name} abbreviation={item.abbrv} />
        )}
        keyExtractor={item => item.id}
        //item seperator
      />
    </SafeAreaView>
  );
}

export default EditWatchlist;
