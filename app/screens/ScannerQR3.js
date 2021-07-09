import React,{ Component } from 'react'
import { StyleSheet, Button, View, Text } from 'react-native'
import {global} from '../styles/global'
import { BarCodeScanner } from 'expo-barcode-scanner'
import firebase from '../firebase/fire'
import { render } from 'react-dom'

export default class ScannerQR3 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            hasPermission: null,
            scanned: false,
            isLoading: true,
            
            incSaldo: 0,
            newSaldo: 0,

            id: "",
            email: "",
            estado: "",
            no_cuenta: "",
            nombre: "",
            prof: "",
            saldo: "",
            tel: "",
        }

        this.handleBarCodeScanned = this.handleBarCodeScanned.bind(this);
        this.handlebBarCodeToScan = this.handlebBarCodeToScan(this);
    }

    componentDidMount() {
        const { status } = BarCodeScanner.requestPermissionsAsync();
        this.setState({
            hasPermission: status,
        });

        const currentId = firebase.auth().currentUser.uid;
        const currentUserFix = '';
        this.currentUserFix = firebase.firestore().collection('users').doc(currentId).onSnapshot(documentSnapshot => {
            this.setState({
                id: currentId,
                email: documentSnapshot.data().email,
                estado: documentSnapshot.data().estado,
                no_cuenta: documentSnapshot.data().no_cuenta,
                nombre: documentSnapshot.data().nombre,
                prof: documentSnapshot.data().prof,
                saldo: documentSnapshot.data().saldo,
                tel: documentSnapshot.data().tel,
            })
            console.log("id: ", this.state.id);
            console.log("email: ", this.state.email);
            console.log("estado: ", this.state.estado);
            console.log("no_cuenta: ", this.state.no_cuenta);
            console.log("nombre: ", this.state.nombre);
            console.log("prof: ", this.state.prof);
            console.log("saldo: ", this.state.saldo);
            console.log("tel: ", this.state.tel);
        });
    }

    handlebBarCodeToScan(){
        if (this.state.isLoading) {
            this.setState({
                isLoading: false,
            })
        } else {
            this.setState({
                isLoading: true,
            })
            
        }
    }

    handleBarCodeScanned({ type, data }) {
        this.console.log(this.state.saldo);
        const currentSaldoFix = parseInt(this.state.saldo);
        const incSaldoFix = parseInt(data);
        this.setState({
            scanned: true,
            incSaldo: incSaldoFix,
        });
        this.console.log(this.state.incSaldo);
        alert(`Pago de ${data} Bs. realizado con exito`);
        
        const newSaldoFix = currentSaldoFix - incSaldoFix;
        this.setState({
            newSaldo: newSaldoFix,
        })
        this.console.log(this.state.newSaldo);
    }

    render() {
        if (this.state.hasPermission === null) {
            return <Text>Requesting for camera permission</Text>;
        }
        if (this.state.hasPermission === false) {
            return <Text>No access to camera</Text>;
        }

        return (
            (<View style={styles.container}>
                <Text>{this.state.scanned}</Text>
                <BarCodeScanner
                    onBarCodeScanned={(this.state.scanned != true) ? undefined : (this.handleBarCodeScanned)}
                    style={StyleSheet.absoluteFillObject}
                />
                {this.state.scanned && <Button title={'Tap to Scan Again'} onPress={()=> setState({scanned: false,})} />}
            </View>)
        )
    }
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});