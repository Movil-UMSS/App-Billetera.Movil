import React from 'react'
import { View, Text, Button } from 'react-native'
import {global} from '../styles/global'
const Home = ({navigation}) => {
    const goToTransference =()=>{
        navigation.push("Transferencia")
    }
    return (
        <View style={global.container}>
            <Text>Home</Text>
            <Button title="Transferencia" onPress={goToTransference}></Button>
        </View>
    )
}


export default Home
