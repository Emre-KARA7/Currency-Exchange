import React from 'react';
import styles from './HeaderIconButton.style';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux'; //redux

const HeaderIconButton = ({
  navigation,
  iconName,
  navigateScreenName,
  onPresss,
}) => {
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  return (
    <Icon.Button
      style={
        darkTheme ? styles.dark_iconBtnOuterStyle : styles.iconBtnOuterStyle
      }
      name={iconName}
      iconStyle={darkTheme ? styles.dark_iconBtnStyle : styles.iconBtnStyle}
      onPress={() => {
        if (onPresss) onPresss();
        else navigation.navigate(navigateScreenName);
      }}
    />
  );
};

export default HeaderIconButton;
