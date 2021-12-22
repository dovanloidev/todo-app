import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BottomTab" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
