import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import styles from './Checkbox.style';

const Checkbox = ({onPress}) => {
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
      onPress={onPress}
    />
  );
};

export default Checkbox;
