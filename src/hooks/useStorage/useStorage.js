import {useState} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';

function useStorage() {
  //
  const [StorageData, setStorageData] = useState(null);
  const [StorageLoading, setStorageLoading] = useState(false);
  const [StorageError, setStorageError] = useState(null);

  const storageSet = async (key, value) => {
    try {
      setStorageLoading(true);
      console.log(JSON.parse(value));
      await EncryptedStorage.setItem(key, JSON.stringify(value)); //----changed
      setStorageLoading(false);
    } catch (err) {
      setStorageLoading(false);
      setStorageError(err);
    }
  };

  const storageGet = async key => {
    try {
      setStorageLoading(true);
      const value = await JSON.parse(EncryptedStorage.getItem(key)); //----changed
      setStorageData(value);
      setStorageLoading(false);
    } catch (err) {
      setStorageLoading(false);
      setStorageError(err);
    }
  };

  const storageRemoveItem = async key => {
    try {
      setStorageLoading(true);
      await EncryptedStorage.removeItem(key);
      setStorageLoading(false);
    } catch (err) {
      setStorageLoading(false);
      setStorageError(err);
    }
  };

  const storageClear = async () => {
    try {
      setStorageLoading(true);
      await EncryptedStorage.clear();
      setStorageLoading(false);
    } catch (err) {
      setStorageLoading(false);
      setStorageError(err);
    }
  };

  return {
    StorageData,
    StorageLoading,
    StorageError,
    storageSet,
    storageGet,
    storageRemoveItem,
    storageClear,
  };
}

export default useStorage;
