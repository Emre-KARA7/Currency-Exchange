import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import QRCode from 'react-qr-code';
import {View, TouchableOpacity} from 'react-native';
import styles from './QRcode.style';
import percentage from '../../helpers/percentage';

const QRcode = ({value}) => {
  const [isOpen, setIsOpen] = useState(false);
  if (!isOpen) {
    // icon
    return (
      <TouchableOpacity
        onPress={() => {
          setIsOpen(true);
        }}>
        <Icon name="qrcode" icon style={styles.ico} />
      </TouchableOpacity>
    );
  } else {
    // qr
    return (
      <TouchableOpacity
        onPress={() => {
          setIsOpen(false);
        }}>
        <View style={styles.container}>
          <QRCode value={value} size={percentage(76)} style={styles.qr} />
        </View>
      </TouchableOpacity>
    );
  }
};

export default QRcode;
