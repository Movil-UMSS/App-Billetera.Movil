import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native"; 
import React, { useEffect, useState } from "react";

import Home from '../screens/Home'
import GeneradorQR from '../screens/Generador QR'
import Transferencia from '../screens/Transferencia'
import ScannerQR from '../screens/ScannerQR';
import Cuenta from '../screens/Cuenta';
import Historial from '../screens/Historial';
import PersonasPago from '../screens/PersonasPorPago'
import PersonasCobra from '../screens/PersonasPorCobra';
import Login from '../screens/Login';
import Registry from "../screens/Registry";

import firebase from "../firebase/fire";

const Stack = createStackNavigator();

export default function Routes() {
    const [user, setUser] = useState(null);
    const onAuthStateChanged = (user=firebase.auth().currentUser | null) => {
        setUser(user);
    };
    useEffect(() => {
        const subscribe = firebase.auth().onAuthStateChanged(onAuthStateChanged);
        return subscribe;
    }, []);

    return (
        <Stack.Navigator>
            {user ? (
                <>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Transferencia" component={Transferencia} />
                    <Stack.Screen name="Cobra (Generador QR)" component={GeneradorQR}/>
                    <Stack.Screen name="Pago (Escaneador QR)" component={ScannerQR}/>
                    <Stack.Screen name="Cuenta" component={Cuenta}/>
                    <Stack.Screen name="Historial de Transferencia" component={Historial}/>
                    <Stack.Screen name="Personas por pago" component={PersonasPago}/>
                    <Stack.Screen name="Personas por cobra" component={PersonasCobra}/>
                </>
            ) : (
                <>
                    <Stack.Screen name="Login" component={Login} options={{ headerShown:false }} />
                    <Stack.Screen name="Registry" component={Registry} options={{ title:"Registro"}}/>
                </>
            )}
        </Stack.Navigator>
    )
}

