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
                id: documentSnapshot.data().id,
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
            /*<Text style={global.textTitulo}>{userTest.nombre}</Text>
            <Text style={global.textTitulo}>{user.email}</Text>*/
            <SafeAreaView style={global.container}>
                <Text style={global.textTitulo}>Mi cuenta</Text>
                <Text style={global.textTitulo}>{this.state.id}</Text>
                <Text style={global.textTitulo}>{this.state.email}</Text>
                <Text style={global.textTitulo}>{this.state.estado}</Text>
                <Text style={global.textTitulo}>{this.state.no_cuenta}</Text>
                <Text style={global.textTitulo}>{this.state.nombre}</Text>
                <Text style={global.textTitulo}>{this.state.prof}</Text>
                <Text style={global.textTitulo}>{this.state.saldo}</Text>
                <Text style={global.textTitulo}>{this.state.tel}</Text>

            </SafeAreaView>
        )
        
        /*return (
            <SafeAreaView  style={global.container}>
            
                <Text style={global.textTitulo}>{userTest.nombre}</Text>
                <Text style={global.textTitulo}>{user.nombre}</Text>
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
        )*/
    };

}

