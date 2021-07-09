import React,{ useEffect, useState } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner';
import firebase from '../firebase/fire';

export default function ScannerQR4() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [incSaldo, setIncSaldo] = useState(0);
    const [newSaldo, setNewSaldo] = useState(0);
    const [id, setId] = useState(firebase.auth().currentUser.uid);
    const [email, setEmail] = useState();
    const [estado, setEstado] = useState();
    const [noCuenta, setNoCuenta] = useState();
    const [nombre, setNombre] = useState();
    const [prof, setProf] = useState();
    const [saldo, setSaldo] = useState();
    const [tel, setTel] = useState();

    guardarUsuario();
    
    async function guardarUsuario() {
        const doc = await firebase.firestore().collection('users').doc(id).get().then( (doc) => {
            setEmail(doc.data().email);
            setEstado(doc.data().estado);
            setNoCuenta(doc.data().no_cuenta);
            setNombre(doc.data().nombre);
            setProf(doc.data().prof);
            setSaldo(parseInt(doc.data().saldo));
            setTel(doc.data().tel);
        })
    }

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = async ({ type, data }) => {
        console.log(saldo);
        console.log(data);
        if (parseInt(data) < saldo) {
            setNewSaldo(saldo - parseInt(data));
            alert(`Pago de ${data} Bs realizado con exito`);
        } else {
            alert(`Pago de ${data} Bs no puede ser realizado, no tiene suficiente saldo`);
        }
        setScanned(true);
    };
    
    async function actualizarDato() {
        const actualizado = await firebase.firestore().collection('users').doc(id).update({saldo: newSaldo});
    }
    
    if (newSaldo != 0) {
        console.log(newSaldo);
        actualizarDato();
    }

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
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});