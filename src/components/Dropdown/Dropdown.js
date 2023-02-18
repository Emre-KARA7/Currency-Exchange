import React from 'react';
import {View} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import styles from './Dropdown.style';
import {useSelector} from 'react-redux'; //redux
import Icon from 'react-native-vector-icons/Entypo';
import {Colors} from '../../assets/colors';

const Dropdown = ({data, setSelected, pleaceholder, save, onSelect}) => {
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  return (
    <View style={styles.container}>
      <SelectList
        boxStyles={styles.box}
        inputStyles={darkTheme ? styles.input_dark : styles.input}
        dropdownStyles={styles.dropdown}
        disabledItemStyles={
          darkTheme ? styles.disabledItem_dark : styles.disabledItem
        }
        disabledTextStyles={styles.disabledText}
        dropdownTextStyles={
          darkTheme ? styles.dropdownText_dark : styles.dropdownText
        }
        dropdownItemStyles={styles.dropdownItem}
        arrowicon={<Icon name={'chevron-down'} size={20} color={Colors.main} />}
        searchicon={
          <Icon name={'magnifying-glass'} size={20} color={Colors.main} />
        }
        closeicon={<Icon name={'cross'} size={20} color={Colors.main} />}
        placeholder={pleaceholder}
        setSelected={setSelected}
        data={data}
        save={save}
        onSelect={onSelect}
      />
    </View>
  );
};

export default Dropdown;
