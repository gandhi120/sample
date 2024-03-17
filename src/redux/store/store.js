import {combineReducers, configureStore} from '@reduxjs/toolkit';
import counterSlice from '../feature/CounterSlice';
import AuthSlice from '../feature/AuthSlice';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
const reducer = combineReducers({
  counter: counterSlice,
  auth: AuthSlice,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};
const persistedReducer = persistReducer(persistConfig, reducer);

const myStore = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

const persister = persistStore(myStore);
export {myStore, persister};
