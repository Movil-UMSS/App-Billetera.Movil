import React,{ Component } from 'react'
import { Button, View, Text} from 'react-native'
import {global} from '../styles/global'
import { BarCodeScanner } from 'expo-barcode-scanner'
import firebase from '../firebase/fire'

export default class Cuenta extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            hasPermission: null,
            saldoActual: 0,
            scanned: false,
        }
    }
    componentDidMount() {
        const currentId = firebase.auth().currentUser.uid;
        //console.log(currentId);
        const currentUserFix = '';
        currentUserFix = firebase.firestore().collection('users').doc(currentId).onSnapshot(documentSnapshot => {
            this.setState({
                saldoActual: parseInt(documentSnapshot.data().saldo),
            })
        });
        BarCodeScanner.requestPermissionsAsync();
    }
    componentDidUpdate() {
        this.setState({
            status: 'granted',
        })
    }

    handleBarCodeScanned({type, data}) {
        this.setState({
            scanned: true,
        })

        const saldoFix = userSaldo-parseInt(data);
        const currentIdNew = firebase.auth().currentUser.uid;
        const currentUserNewFix = '';
        currentUserNewFix = firebase.firestore().collection('users').doc(currentIdNew).update({
            saldo: saldoFix,
        }).then(() => {
            console.log('Actualizado');
        });

        alert(`Pago de ${data} Bs realizado con exito`);
    }
    
    render() {

        return (
            <View style={global.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
            </View>
        )
    };

}