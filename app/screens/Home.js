import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements';
import {global} from '../styles/global'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import firebase from '../firebase/fire';

const Home = ({navigation}) => {

    const signOut = async () => {
        try {
            const response = await firebase.auth().signOut();
            navigation.navigate('Login');
        } catch (err) {
            console.log(err);
        }
    }

    const goToTransference =()=>{
        navigation.push("Transferencia")
    }
    const goToCuenta = ()=>{
        navigation.push("Cuenta")
    }
    const goToHistorial =()=>{
        navigation.push("Historial de Transferencia")
    }
    return (
        <View style={global.container}>
            <TouchableOpacity  style={global.fixToText} onPress={(goToCuenta)}>
                <AntDesign name="idcard" size={80} color="black" />  
                <Text>Mi cuenta</Text>                                             
            </TouchableOpacity >
            <TouchableOpacity  style={global.fixToText} onPress={(goToTransference)}>
                <MaterialCommunityIcons name="transfer" size={80} color="black" />   
                <Text> Transferencia</Text>                                            
            </TouchableOpacity >
            <TouchableOpacity  style={global.fixToText} onPress={(goToHistorial)}>
                <FontAwesome5 name="list-alt" size={80} color="black" />
                <Text>Historial de Transferencia</Text>                                               
            </TouchableOpacity >
            <TouchableOpacity  style={global.ingresarButton} onPress={() => signOut()}>
                <Text style={global.ingresarButtonText}>SALIR</Text>
            </TouchableOpacity>
                                    
        </View>
    )
}


export default Home
