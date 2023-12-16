import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Account from '@account';
const Stack = createNativeStackNavigator();

class ContactStackNavigator extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Book" component={Account} />
      </Stack.Navigator>
    );
  }
}

export default ContactStackNavigator;
