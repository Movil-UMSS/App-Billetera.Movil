import React,{ Component } from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import {global} from '../styles/global'
import firebase from '../firebase/fire'

export default class Cuenta extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            id: "",
            email: "",
            estado: "",
            no_cuenta: "",
            nombre: "",
            prof: "",
            saldo: "",
            tel: "",
        }
    }
    componentDidMount() {
        //console.log('cccccccccccccccc');
        const currentId = firebase.auth().currentUser.uid;
        //console.log(currentId);
        const currentUserFix = '';
        this.currentUserFix = firebase.firestore().collection('users').doc(currentId).onSnapshot(documentSnapshot => {
            //console.log(documentSnapshot.data());
            this.setState({
                id: currentId,
                email: documentSnapshot.data().email,
                estado: documentSnapshot.data().estado,
                no_cuenta: documentSnapshot.data().no_cuenta,
                nombre: documentSnapshot.data().nombre,
                prof: documentSnapshot.data().prof,
                saldo: documentSnapshot.data().saldo,
                tel: documentSnapshot.data().tel
            })
        });
    }
    
    render() {
        
        return (
            <SafeAreaView  style={global.container}>
                <Text style={global.textTitulo}>Mi cuenta</Text>
                
                <View  style={global.rectangulo}>
                    <Text>Saldo:</Text>
                    <Text>{this.state.saldo}</Text>
                </View>
                <View style={global.rectangulo} >
                    <Text style={global.textTitulo}>Detalle de la cuenta</Text>
                    <View style={global.fixToTextCuenta}> 
                        <Text style={global.negritatext}>Id: </Text>
                        <Text style={{flex: 1}}>{this.state.no_cuenta}</Text>
                    </View>
                    
                    <View style={global.fixToTextCuenta}> 
                        <Text style={global.negritatext}>Estado: </Text>
                        <Text style={{color:"green",fontWeight:'bold'}}>{this.state.estado}</Text>
                    </View>
                                    
                </View>
                <View style={global.rectangulo}>
                <Text style={global.textTitulo}>Informacion Personal</Text>
                    <View style={global.fixToTextCuenta}> 
                            <Text style={global.negritatext}>Nombre Completo: </Text>
                            <Text>{this.state.nombre}</Text>
                    </View>
                    <View style={global.fixToTextCuenta}> 
                            <Text style={global.negritatext}>Email: </Text>
                            <Text>{this.state.email}</Text>
                    </View>
                    <View style={global.fixToTextCuenta}> 
                            <Text style={global.negritatext}>Telefono: </Text>
                            <Text>{this.state.tel}</Text>
                    </View>
                    <View style={global.fixToTextCuenta}> 
                            <Text style={global.negritatext}>Profesion/Ocupacion: </Text>
                            <Text>{this.state.prof}</Text>
                    </View>                
                </View>
            </SafeAreaView>
        )
    };

}

