import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Like from '@like';
const Stack = createNativeStackNavigator();

class LikeStackNavigator extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Like" component={Like} />
      </Stack.Navigator>
    );
  }
}

export default LikeStackNavigator;
