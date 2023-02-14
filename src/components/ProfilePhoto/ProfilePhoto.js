import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';

import styles from './ProfilePhoto.style';

const ProfilePhoto = data => {
  console.log(data);
  const [img, setImg] = useState(
    <Image style={styles.img} source={require('../../assets/img/user.png')} />,
  );
  useEffect(() => {
    if (data.data) {
      setImg(<Image style={styles.img} source={{uri: data.data}} />);
    }
  }, [data]);

  return img;
};

export default ProfilePhoto;
