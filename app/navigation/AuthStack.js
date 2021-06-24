import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import LoginScreen from '../screens/Login';

const Stack = createStackNavigator();

const AuthStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName;

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then((value) => {
        if (value == null) {
            AsyncStorage.setItem('alreadyLaunched', 'true'); 
            setIsFirstLaunch(true);
        } else {
            setIsFirstLaunch(false);
        }
        }); 

    }, []);

    if (isFirstLaunch === null) {
        return null; 
    } else if (isFirstLaunch == true) {
        routeName = 'npi';
    } else {
        routeName = 'Login';
    }

    return (
        <Stack.Navigator initialRouteName={routeName}>
            
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{header: () => null}}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;