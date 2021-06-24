import React from 'react'
import Home from '../screens/Home'
import GeneradorQR from '../screens/Generador QR'
import Transferencia from '../screens/Transferencia'
import { createStackNavigator } from '@react-navigation/stack';
import ScannerQR from '../screens/ScannerQR';
import Cuenta from '../screens/Cuenta';
import Historial from '../screens/Historial';
import PersonasPago from '../screens/PersonasPorPago'
import PersonasCobra from '../screens/PersonasPorCobra'

const Stack = createStackNavigator();
const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Transferencia" component={Transferencia} />
            <Stack.Screen name="Cobra (Generador QR)" component={GeneradorQR}/>
            <Stack.Screen name="Pago (Escaneador QR)" component={ScannerQR}/>
            <Stack.Screen name="Cuenta" component={Cuenta}/>
            <Stack.Screen name="Historial de Transferencia" component={Historial}/>
            <Stack.Screen name="Personas por pago" component={PersonasPago}/>
            <Stack.Screen name="Personas por cobra" component={PersonasCobra}/>
        </Stack.Navigator>
    )
}

export default MyStack
