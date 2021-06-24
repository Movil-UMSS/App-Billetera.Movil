import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AuthProvider } from './app/services/AuthProvider';
import Routes from './app/routes/Routes';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </AuthProvider>
  );
}