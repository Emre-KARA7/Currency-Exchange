import {useState} from 'react';
//import EncryptedStorage from 'react-native-encrypted-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

function useStorage() {
  //
  const [StorageLoading, setStorageLoading] = useState(false);
  const [StorageError, setStorageError] = useState(null);

  const storageSet = async (key, value) => {
    try {
      setStorageLoading(true);
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
      setStorageLoading(false);
    } catch (err) {
      setStorageLoading(false);
      setStorageError(err);
    }
  };

  const storageGet = async key => {
    try {
      setStorageLoading(true);
      const jsonValue = await AsyncStorage.getItem(key);
      if (jsonValue != null) {
        setStorageLoading(false);
        return JSON.parse(jsonValue);
      } else {
        setStorageLoading(false);
        return null;
      }
    } catch (err) {
      setStorageLoading(false);
      setStorageError(err);
    }
  };

  return {
    StorageLoading,
    StorageError,
    storageSet,
    storageGet,
  };
}

export default useStorage;
