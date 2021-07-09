import React, { useState } from 'react'
import {
    Image,
    StyleSheet,
    Text,
    View,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ScrollView

} from 'react-native';

import { Button, Icon, Input } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import imagenLogo from '../../Image/logo-WP1.png';

import firebase from '../firebase/fire';

export default function Registry({navigation}) {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [prof, setProf] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signUp = async () => {
        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(email, password).then(cred => {
                return firebase.firestore().collection('users').doc(cred.user.uid).set({
                    saldo: '0',
                    no_cuenta: firebase.auth().currentUser.uid,
                    estado: 'ACTIVO',
                    nombre: nombre,
                    tel: tel,
                    prof: prof,
                    email: email
                });
            });
            registrarDatos();
        } catch (err) {
            setError(err.message);
            //console.log(err)
        }
    }
var valoresNoAceptados = /^[0-9@]+$/;
    const validate = () =>{
        if(!validateName()){
            if(nombre===''){
                alert('Por favor ingresar Nombre')
            }else{
                if(nombre.match(valoresNoAceptados)){
                alert('Solamente letras, por favor ingresar Nombre')
                }
            }            
        }else{
            if(!validateEmail()){
                alert('Por favor ingresar email')
            }else{
                if(!validateTel()){
                    alert('por favor ingresar telefono')
                }else{
                    if(!validateProf()){
                        if(prof===''){
                            alert('Por favor ingresar profesion')
                        }else{
                            if(prof.match(valoresNoAceptados)){
                            alert('Solamente letras, por favor ingresar profesion')
                        }
                    }
                        
                    }else{
                        if(!validatePassword()){
                            alert('Minimo  5 caracters, por favor ingresar contraseña')
                        }else{
                            signUp()
                        }
                    }
                }
            }
            
        }
    }

    const validateName = () => {
        let re = /^[a-zA-z]+$/;
          return re.test(nombre);
    }

    const validateEmail = () => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const validateTel= () => {
        return tel.length>7
    } 

    const validateProf = () => {
        let re = /^[a-zA-z]+$/;
          return re.test(prof);
    }

    const validatePassword = () => {
        return password.length>4
    } 
    return (
        <ScrollView>
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
            >
            <LinearGradient
                colors={['#fff', '#fff', '#fff']}
                style={styles.container}
            >
            <Text style={styles.subtituloText}>Mi billetera móvil</Text>

        
            <Input
                value={nombre}
                onChangeText={setNombre}
                placeholder='Nombre completo'
                placeholderTextColor='#abb8c3'
                style={styles.input}
                keyboardType='default'
                
            />

            <Input
                value={email}
                onChangeText={setEmail}
                placeholder='Correo electrónico'
                placeholderTextColor='#abb8c3'
                style={styles.input}
                autoCorrect={true}
                autoCapitalize='none'
                autoCompleteType='email'
                keyboardType='email-address'
                textContentType='emailAddress'
            />

            <Input
                value={tel}
                onChangeText={setTel}
                placeholder='Telefono'
                placeholderTextColor='#abb8c3'
                style={styles.input}
                keyboardType='number-pad'
                maxLength={8}
            />

            <Input
                value={prof}
                onChangeText={setProf}
                placeholder='Profesión/Ocupación:'
                placeholderTextColor='#abb8c3'
                style={styles.input}
                keyboardType='default'
            />

            <Input
                value={password}
                onChangeText={setPassword}
                placeholder='Contraseña'
                placeholderTextColor='#abb8c3'
                style={styles.input}
                secureTextEntry={true}
                textContentType='password'
            />

            {
                error ?
                    <Text style={{ color: 'red' }} >{error}</Text>
                    : null
            }

            <TouchableOpacity style={styles.ingresarButton} onPress={() => validate()}>
                <Text style={styles.ingresarButtonText}>Registrate</Text>
            </TouchableOpacity>
            <View style={styles.signUpTextView}>
                <Text style={styles.signUpText}>¿Ya tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={[styles.signUpText, { color: '#f57f17' }]}>
                        {' Ingresa '}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.ingresarBar}>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name='google' type='font-awesome' size={30} color='#fff' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name='facebook-square'type='font-awesome' size={30}color='#fff'/>
                </TouchableOpacity>
            </View>


            </LinearGradient>
        </TouchableWithoutFeedback>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
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
        flex:1
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
        marginTop: 20,
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