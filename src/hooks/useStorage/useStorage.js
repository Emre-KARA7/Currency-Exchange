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
      await EncryptedStorage.setItem(key, JSON.parse(value));
      setStorageLoading(false);
    } catch (err) {
      setStorageLoading(false);
      setStorageError(err);
    }
  };

  const storageGet = async key => {
    try {
      setStorageLoading(true);
      const value = await EncryptedStorage.getItem(key);
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
