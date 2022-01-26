import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {theme} from 'native-base';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Todo from '../screens/Todo';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName = '';

          if (route.name === 'Todo') {
            iconName = 'list-alt';
          } else {
            iconName = 'list-alt';
          }

          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.blue[500],
        tabBarInactiveTintColor: theme.colors.gray[400],
        headerShown: false,
        tabBarVisible: true,
      })}>
      <Tab.Screen name="Todo" component={Todo} />
    </Tab.Navigator>
  );
};

export default BottomTab;
