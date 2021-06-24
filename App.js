import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import MyStack from './app/routes/MyStack';
import Home from './app/screens/Home'

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}