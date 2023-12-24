import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './stack-navigators/HomeStackNavigator';
import AccountStackNavigator from './stack-navigators/AccountStackNavigator';
import CustomIcon from '@customIcon';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {routing} from '@utils/routeConstant';
import BottomTabs from '@bottomTabs';

const Tab = createBottomTabNavigator();

const bottomTab = route => <BottomTabs />;

const BottomTabNavigators = props => {
  const renderIcon = iconName => {
    return (
      <CustomIcon type={'sample'} name={iconName} size={24} color="blue" />
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      options={({route}) => ({
        tabBarStyle: getTabBarStyle(route),
        tabBarIcon: () => renderIcon('home'),
      })}
      tabBar={_props => bottomTab()}>
      <Tab.Screen name="HomeStack" component={HomeStackNavigator} />
      {/* <Tab.Screen name="BookStack" component={BookStackNavigator} /> */}
      <Tab.Screen name="Account" component={AccountStackNavigator} />
    </Tab.Navigator>
  );
};

const getTabBarStyle = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  console.log('routeName', routeName);
  let display = routeName === routing.PROFILE ? 'none' : 'flex';
  return {display};
};

export default BottomTabNavigators;
