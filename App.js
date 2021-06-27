import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Routes from './app/routes/Routes';
import { AuthProvider } from './app/firebase/AuthProvider';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
}


