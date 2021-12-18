import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DailyList} from './pages/DailyList';
import Home from './pages/Home';
import Feather from 'react-native-vector-icons/Feather';
import {CreateNewStock} from './pages/CreateNewStock';

const {Navigator, Screen} = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: '#EFE3C8',
          tabBarInactiveTintColor: '#746763',
          tabBarStyle: {backgroundColor: '#22151F', borderTopColor: '#EFE3C8'},
        }}>
        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <Feather name="home" color={color} size={size} />
            ),
          }}
        />
        <Screen
          name="List"
          component={DailyList}
          options={{
            tabBarIcon: ({color, size}) => (
              <Feather name="calendar" color={color} size={size} />
            ),
          }}
        />
        <Screen
          name="New"
          component={CreateNewStock}
          options={{
            tabBarBadge: 'Novo',
            tabBarIcon: ({color, size}) => (
              <Feather name="plus-circle" color={color} size={size} />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
