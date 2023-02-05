import React from 'react';
import {View, Image} from 'react-native';

import styles from './ProfilePhoto.style';

const ProfilePhoto = ({text, onPress}) => {
  return (
    <Image style={styles.img} source={require('../../assets/img/user.png')} />
  );
};

export default ProfilePhoto;
