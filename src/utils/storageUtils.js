import {MMKV} from 'react-native-mmkv';
const storage = new MMKV({
  id: 'sample-mobile-storage',
  encryptionKey: 'sampleV1',
});

export const mmkvStorage = {
  clear: () => {
    storage.clearAll();
    return Promise.resolve();
  },
  setItem: (key, value) => {
    console.log('keyL;', key, value);
    storage.set(key, JSON.stringify(value));
    return Promise.resolve(true);
  },
  getItem: key => {
    let value = storage.getString(key);
    if (value && !!value) {
      value = JSON.parse(value);
    }
    return Promise.resolve(value);
  },
  removeItem: key => {
    storage.delete(key);
    return Promise.resolve();
  },
};
