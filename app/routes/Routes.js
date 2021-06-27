import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native"; 
import React, { useContext } from "react";

import Home from '../screens/Home'
import GeneradorQR from '../screens/Generador QR'
import Transferencia from '../screens/Transferencia'
import ScannerQR from '../screens/ScannerQR';
import Cuenta from '../screens/Cuenta';
import Historial from '../screens/Historial';
import PersonasPago from '../screens/PersonasPorPago'
import PersonasCobra from '../screens/PersonasPorCobra';
import Login from '../screens/Login';

import { AuthContext } from "../firebase/AuthProvider";

import AuthStack from './AuthStack';
import MyStack from './MyStack';

const Stack = createStackNavigator();
export default function Routes() {
    const { user } = useContext(AuthContext);
    return (
        <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
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

