import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import useStorage from '../../hooks/useStorage';
import Checkbox from '../Checkbox';
import styles from './EditWatchlistCard.style';
import {useSelector} from 'react-redux'; //redux

const EditWatchlistCard = ({name, abbreviation}) => {
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  return (
    <View style={darkTheme ? styles.container_dark : styles.container}>
      <Text style={darkTheme ? styles.text_dark : styles.text}>{name}</Text>
      <Text style={darkTheme ? styles.text_abrv_dark : styles.text_abrv}>
        {abbreviation}
      </Text>
      <Checkbox />
    </View>
  );
};

export default EditWatchlistCard;
