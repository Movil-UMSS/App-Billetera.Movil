import React , { useState, useEffect }from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import {global} from '../styles/global'
import { BarCodeScanner } from 'expo-barcode-scanner';
import firebase from '../firebase/fire';

const ScannerQR = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [incSaldo, setIncSaldo] = useState(0);
    const [newSaldo, setNewSaldo] = useState(0);
    const [id, setId] = useState();
    const [email, setEmail] = useState();
    const [estado, setEstado] = useState();
    const [noCuenta, setNoCuenta] = useState();
    const [nombre, setNombre] = useState();
    const [prof, setProf] = useState();
    const [saldo, setSaldo] = useState();
    const [tel, setTel] = useState();

    useEffect(() => {
        (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
        
        //console.log(id);
            /*console.log("id: ", this.state.id);
            console.log("email: ", this.state.email);
            console.log("estado: ", this.state.estado);
            console.log("no_cuenta: ", this.state.no_cuenta);
            console.log("nombre: ", this.state.nombre);
            console.log("prof: ", this.state.prof);
            console.log("saldo: ", this.state.saldo);
            console.log("tel: ", this.state.tel);*/

    }, []);

    async function buscarUsuario(){
        const currentId = firebase.auth().currentUser.uid;
        setId(currentId);
        console.log(id);

        const doc = await firebase.firestore().collection('users').doc(currentId).get();
        console.log(doc.data());
    }

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);

        buscarUsuario();

        alert(`Pago de ${data} Bs realizado con exito`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
        <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
        />
        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
    );
}
export default ScannerQR;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});