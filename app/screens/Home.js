import React,{useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,

} from 'react-native';

import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginWP() {
  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
  }, []);
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
        <Text style={styles.tituloText}>Servicios y Operaciones</Text>
        
        <View style={styles.top}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name='user' type='font-awesome' size={50} color='#fff'/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name='qrcode'type='font-awesome' size={50}color='#fff'/>
          </TouchableOpacity>
        </View>
        <View style={styles.bot}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name='exchange' type='font-awesome' size={43} color='#fff'/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name='file' type='font-awesome' size={50} color='#fff'/>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  tituloText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fb9e00',
    alignSelf: 'center',
  },
  top: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 120,
  },
  bot: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 120,
  },
  iconButton: {
    backgroundColor: '#333',
    padding: 35,
    marginHorizontal: 30,
    borderRadius: 100,
  },
});
