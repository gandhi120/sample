import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyRewards = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>MyRewards screen!</Text>
  </View>
);

class MyRewardStackNavigator extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MyRewards" component={MyRewards} />
      </Stack.Navigator>
    );
  }
}

export default MyRewardStackNavigator;
