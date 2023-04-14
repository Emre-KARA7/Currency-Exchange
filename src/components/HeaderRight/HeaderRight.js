import React from 'react';
import styles from './HeaderRight.style';
import {View} from 'react-native';
import HeaderIconButton from '../HeaderIconButton/HeaderIconButton';

const HeaderRight = ({navigation, iconName, navigateScreenName, onPress}) => {
  return (
    <View style={styles.flexRowCenter}>
      <HeaderIconButton
        navigation={navigation}
        iconName={'setting'}
        navigateScreenName={'SettingsScreen'}
      />
      <HeaderIconButton
        navigation={navigation}
        iconName={iconName}
        navigateScreenName={navigateScreenName}
        onPresss={onPress}
      />
    </View>
  );
};

export default HeaderRight;
