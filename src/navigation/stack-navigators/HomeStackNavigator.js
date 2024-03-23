import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@home';
import SingleProduct from '@singleProduct';
import AddToCart from '@addToCart';
import WhishList from '@whishList';
import Profile from '@profile';
import Address from '@address';
import {routing} from '@utils/routeConstant';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        navigation={props.navigation}
      />
      <Stack.Screen
        name={routing.SINGLE_PRODUCT}
        component={SingleProduct}
        navigation={props.navigation}
      />
      <Stack.Screen
        name={routing.ADD_TO_CART}
        component={AddToCart}
        navigation={props.navigation}
      />
      <Stack.Screen
        name={routing.WISHLIST}
        component={WhishList}
        navigation={props.navigation}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        navigation={props.navigation}
      />
      <Stack.Screen
        name="Address"
        component={Address}
        navigation={props.navigation}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
