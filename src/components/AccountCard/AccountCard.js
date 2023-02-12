import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import styles from './AccountCard.style';

const AccountCard = ({
  accountTitle,
  connectedBranch,
  IBAN,
  budget,
  onPress,
}) => {
  return (
    <View>
      <TouchableOpacity>
        <Text>{accountTitle}</Text>
        <Text>{connectedBranch}</Text>
        <Text>{IBAN}</Text>
        <View>
          <Text>Bakiye</Text>
          <Text>{budget}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AccountCard;
