import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import VoliTableScreen from './screens/VoliTableScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home' }} 
        />
        <Stack.Screen 
          name="VoliTableScreen" 
          component={VoliTableScreen} 
          options={{ title: 'Tabella Voli' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
