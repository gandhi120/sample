import {configureStore} from '@reduxjs/toolkit';
import counterSlice from '../feature/CounterSlice';
// import {Reducers} from '../reducers/reducer';
// export const myStore = createStore(Reducers);
export const myStore = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
