import React,{useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,

} from 'react-native';

import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import imagenLogo from './assets/logo-WP1.png';
//import { SketchPicker } from 'react-color';
//import { registerRootComponent} from 'expo';
//import TestRenderer from 'react-test-renderer';
export default function LoginWP() {
  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
  }, []);

  //var imagenLogo = require('./Imagenes/logo-WP1.png');
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

        <TextInput
          placeholder='Correo electrónico'
          placeholderTextColor='#abb8c3'
          style={styles.input}
          autoCorrect={true}
          autoCapitalize={false}
          autoCompleteType='email'
          keyboardType='email-address'
          textContentType='emailAddress'
        />
        <TextInput
          placeholder='Contraseña'
          placeholderTextColor='#abb8c3'
          style={styles.input}
          secureTextEntry={true}
          textContentType='contraseña'
        />

        <TouchableOpacity>
          <Text style={styles.olvPssText}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ingresarButton}>
          <Text style={styles.ingresarButtonText}>Ingresar</Text>
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
          <Text style={styles.signUpText}>¿Aún no tienes una cuenta?</Text>
          <TouchableOpacity>
            <Text style={[styles.signUpText, { color: '#f57f17' }]}>
              {' Registrate'}
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
