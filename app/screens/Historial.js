import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import {global} from '../styles/global'

export const Historial = ({navigation}) => {
    const goToPersonaPago =()=>{
        navigation.push("Personas por pago")
    }
    const goToPersonaCobra =()=>{
        navigation.push("Personas por cobra")
    }
    return (
        <SafeAreaView  style={global.container}>
            <TouchableOpacity  style={global.fixToText} onPress={(goToPersonaPago)}>
                
                <Text> Personas por pago</Text>                              
            </TouchableOpacity >
            <TouchableOpacity style={global.fixToText} onPress={(goToPersonaCobra)}>
                
                <Text> Personas por cobra</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default Historial