import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import styles from './Checkbox.style';

const Checkbox = ({onPress, isChecked}) => {
  return (
    <BouncyCheckbox
      style={styles.container}
      size={30}
      fillColor={'#388E3C'}
      //unfillColor={'#ff0000'}
      textSize
      textStyle={styles.text}
      icon={styles.icon}
      innerIconStyle={styles.innerIcon}
      isChecked={isChecked}
      onPress={onPress}
    />
  );
};

export default Checkbox;
