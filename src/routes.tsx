import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CreateNewStock from './pages/CreateNewStock';
import Home from './pages/Home';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Estatísticas" component={Home} />
        <Tab.Screen
          name="Adicionar"
          component={CreateNewStock}
          options={{tabBarBadge: 'Novo'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
