import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MyStack from './app/routes/MyStack';

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}


