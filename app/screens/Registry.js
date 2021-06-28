import React, { useState } from 'react'
import {
    Image,
    StyleSheet,
    Text,
    View,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity,

} from 'react-native';

import { Button, Icon, Input } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import imagenLogo from '../../Image/logo-WP1.png';

import firebase from '../firebase/fire';

export default function Registry({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signUp = async () => {
        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
            registrarDatos();
        } catch (err) {
            setError(err.message);
        }
    }

    const registrarDatos = async () => {
        try {
            firebase.firestore().collection('users').add({
                email: email
            })
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <LinearGradient
                colors={['#fff', '#fff', '#fff']}
                style={styles.container}
            >
            <Text style={styles.tituloText}>Wallet Pro!</Text>
            <Text style={styles.subtituloText}>Mi billetera móvil</Text>

            <Input
                value={email}
                onChangeText={setEmail}
                placeholder='Correo electrónico'
                placeholderTextColor='#abb8c3'
                style={styles.input}
                autoCorrect={true}
                autoCapitalize={false}
                autoCompleteType='email'
                keyboardType='email-address'
                textContentType='emailAddress'
            />
            <Input
                value={password}
                onChangeText={setPassword}
                placeholder='Contraseña'
                placeholderTextColor='#abb8c3'
                style={styles.input}
                secureTextEntry={true}
                textContentType='contraseña'
            />

            {
                error ?
                    <Text style={{ color: 'red' }}>{error}</Text>
                    : null
            }

            <TouchableOpacity style={styles.ingresarButton} onPress={() => signUp()}>
                <Text style={styles.ingresarButtonText}>Registrate</Text>
            </TouchableOpacity>

            <View style={styles.ingresarBar}>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name='google' type='font-awesome' size={30} color='#fff' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name='facebook-square'type='font-awesome' size={30}color='#fff'/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name='share' type='font-awesome' size={30} color='#fff'/>
                </TouchableOpacity>
            </View>

            <View style={styles.signUpTextView}>
                <Text style={styles.signUpText}>¿Ya tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={[styles.signUpText, { color: '#f57f17' }]}>
                        {' Ingresa '}
                    </Text>
                </TouchableOpacity>
            </View>

            <View>
                <Image source={imagenLogo}
                style={styles.logoStyle}/>
            </View>

            </LinearGradient>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    logoStyle: {
        width:200,
        height:200,
        alignSelf: 'center'
    },
    tituloText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fb9e00',
        alignSelf: 'center',
    },
    subtituloText: {
        color: '#fb9e00',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#d9e3f0',
        borderRadius: 6,
        marginTop: 10,
        paddingHorizontal: 10,
        fontSize: 14,
        color: '#808e9b',
    },
    olvPssText: {
        alignSelf: 'flex-end',
        color: '#f57f17',
        fontSize: 18,
        fontWeight: '600',
        marginTop: 10,
        alignSelf: 'center'
    },
    ingresarButton: {
        backgroundColor: '#f57f17',
        paddingVertical: 12,
        borderRadius: 6,
        marginTop: 20,
    },
    ingresarButtonText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#fafafa',
        alignSelf: 'center',
    },
    ingresarBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50,
    },
    iconButton: {
        backgroundColor: '#333',
        padding: 14,
        marginHorizontal: 10,
        borderRadius: 100,
    },
    signUpTextView: {
        marginTop: 35,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    signUpText: {
        color: '#808e9b',
        fontSize: 20,
        fontWeight: '500',
    },
});