import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from '../../redux/feature/CounterSlice';

const Like = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View style={styles.rootContainer}>
      <TouchableOpacity onPress={() => dispatch(increment())}>
        <Text>{'INCREMENT'}</Text>
      </TouchableOpacity>
      <Text>{count}</Text>
      <TouchableOpacity onPress={() => dispatch(decrement())}>
        <Text>{'DECREMENT'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Like;
