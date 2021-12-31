import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {useAuth} from '../hooks/useAuth';
import Login from '../pages/Login';
import AppRoutes from './app.routes';

const {Navigator, Screen, Group} = createStackNavigator();

export default function Routes() {
  const {user} = useAuth();
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        {!user?.idToken ? (
          <Screen name="Login" component={Login} />
        ) : (
          <Screen name="Home" component={AppRoutes} />
        )}
        {/* <Group screenOptions={{presentation: 'modal'}}>
          <Screen name="Help" component={Help} />
        </Group> */}
      </Navigator>
    </NavigationContainer>
  );
}
