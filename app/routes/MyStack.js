import React from 'react'
import Home from '../screens/Home'
import GeneradorQR from '../screens/Generador QR'
import Transferencia from '../screens/Transferencia'
import { createStackNavigator } from '@react-navigation/stack';
import ScannerQR from '../screens/ScannerQR';

const Stack = createStackNavigator();
const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Transferencia" component={Transferencia} />
            <Stack.Screen name="Cobra (Generador QR)" component={GeneradorQR}/>
            <Stack.Screen name="Pago (Escaneador QR)" component={ScannerQR}/>
        </Stack.Navigator>
    )
}

export default MyStack
