import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Todo from '../screens/Todo';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Todo" component={Todo} />
    </Tab.Navigator>
  );
};

export default BottomTab;
