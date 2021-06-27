import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import {global} from '../styles/global'
import firebase from '../firebase/fire'

const Cuenta = () => {
    return (
        <SafeAreaView  style={global.container}>
            <Text style={global.textTitulo}>Mi cuenta</Text>
            <View  style={global.rectangulo}>
                <Text>Saldo:</Text>
                <Text>Bs. 450.00 </Text>
            </View>
            <View style={global.rectangulo} >
                <Text style={global.textTitulo}>Detalle de la cuenta</Text>
                <View style={global.fixToTextCuenta}> 
                    <Text style={global.negritatext}>N° de Cuenta: </Text>
                    <Text>123456789</Text>
                </View>
                
                <View style={global.fixToTextCuenta}> 
                    <Text style={global.negritatext}>Estado: </Text>
                    <Text style={{color:"green",fontWeight:'bold'}}>ACTIVO</Text>
                </View>
                                
            </View>
            <View style={global.rectangulo}>
            <Text style={global.textTitulo}>Informacion Personal</Text>
                <View style={global.fixToTextCuenta}> 
                        <Text style={global.negritatext}>Nombre Completo: </Text>
                        <Text>Rodrigo Ledezma</Text>
                </View>
                <View style={global.fixToTextCuenta}> 
                        <Text style={global.negritatext}>Email: </Text>
                        <Text>rigo123@gmail.com</Text>
                </View>
                <View style={global.fixToTextCuenta}> 
                        <Text style={global.negritatext}>Telefono: </Text>
                        <Text>70713467</Text>
                </View>
                <View style={global.fixToTextCuenta}> 
                        <Text style={global.negritatext}>Profesion/Ocupacion: </Text>
                        <Text>Estudiante Universitario</Text>
                </View>                
            </View>
        </SafeAreaView>
    )
}

export default Cuenta
