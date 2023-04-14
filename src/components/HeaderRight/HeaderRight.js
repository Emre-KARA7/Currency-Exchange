import React from 'react';
import styles from './HeaderRight.style';
import Icon from 'react-native-vector-icons/AntDesign';
import {View} from 'react-native';
import {useSelector} from 'react-redux'; //redux

const HeaderRight = ({navigation, iconName, navigateScreenName}) => {
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  return (
    <View style={styles.flexRowCenter}>
      <Icon.Button
        style={
          darkTheme ? styles.dark_iconBtnOuterStyle : styles.iconBtnOuterStyle
        }
        name="setting"
        iconStyle={darkTheme ? styles.dark_iconBtnStyle : styles.iconBtnStyle}
        onPress={() => navigation.navigate('SettingsScreen')}
      />
      <Icon.Button
        style={
          darkTheme ? styles.dark_iconBtnOuterStyle : styles.iconBtnOuterStyle
        }
        name={iconName}
        iconStyle={darkTheme ? styles.dark_iconBtnStyle : styles.iconBtnStyle}
        onPress={() => navigation.navigate(navigateScreenName)}
      />
    </View>
  );
};

export default HeaderRight;
