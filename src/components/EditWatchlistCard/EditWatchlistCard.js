import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import useStorage from '../../hooks/useStorage';
import Checkbox from '../Checkbox';
import styles from './EditWatchlistCard.style';

const EditWatchlistCard = ({name, abbreviation}) => {
  //

  return (
    <View>
      <Text>{name}</Text>
      <Text>{abbreviation}</Text>
      <Checkbox />
    </View>
  );
};

export default EditWatchlistCard;
