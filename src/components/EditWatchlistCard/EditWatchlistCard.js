import React from 'react';
import {View, Text} from 'react-native';
import Checkbox from '../Checkbox';
import styles from './EditWatchlistCard.style';
import {useSelector} from 'react-redux'; //redux

const EditWatchlistCard = ({name, abbreviation, onPress}) => {
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  return (
    <View style={darkTheme ? styles.container_dark : styles.container}>
      <Text style={darkTheme ? styles.text_dark : styles.text}>{name}</Text>
      <Text style={darkTheme ? styles.text_abrv_dark : styles.text_abrv}>
        {abbreviation}
      </Text>
      <Checkbox onPress={onPress} />
    </View>
  );
};

export default EditWatchlistCard;
