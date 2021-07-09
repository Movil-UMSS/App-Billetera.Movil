import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import {global} from '../styles/global'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 

const Transferencia = ({navigation}) => {
    const goToGenerateQR =()=>{
        navigation.push("Cobra (Generador QR)")
    }
    const goToScannerQR =()=>{
        navigation.push("Pago (Escaneador QR)")
    }
    return (
        <SafeAreaView  style={global.container}>
            <TouchableOpacity  style={global.fixToText} onPress={(goToGenerateQR)}>
                <AntDesign name="qrcode" size={80} color="black" /> 
                <Text> Cobra (Generador QR)</Text>                              
            </TouchableOpacity >
            <TouchableOpacity style={global.fixToText} onPress={(goToScannerQR)}>
                <MaterialIcons name="qr-code-scanner" size={80} color="black" />
                <Text> Pago (Escaneador QR)</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}


export default Transferencia