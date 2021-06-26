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
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

//import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBarcodeRead, faBarcode, faBarcodeScan} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';

/*library.add(
  fas,
  faBarcodeRead
);*/

export default function TransferQR() {
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
        <TouchableOpacity style={styles.back}>
          <Icon name='angle-left' type='font-awesome' color='#333' />
        </TouchableOpacity>
        
        <Text style={styles.tituloText}> Transferencia por QR</Text>
        <View style={styles.top}>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesomeIcon icon= {faBarcode} size="8x" color='#fff'/>
            <Text></Text>
            <Text style={styles.pagarQR}>Pagar</Text>
          </TouchableOpacity>
            
        </View>

        <View style={styles.bot}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name='' type='font-awesome' size={60} color='#fff'/>
            <Text></Text>
            <Text style={styles.cobrarQR}>Cobrar</Text>
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
  pagarQR: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fb9e00',
    alignSelf: 'center',
  },
  cobrarQR: {
    fontSize: 40,
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
    padding: 50,
    marginHorizontal: 40,
    borderRadius: 10,
  },
  back: {
    backgroundColor: '#fff',
    //padding: 10,
    marginHorizontal: 340,
    borderRadius: 100,
    alignItems: 'baseline',
    justifyContent: 'flex-end',
  },
});
