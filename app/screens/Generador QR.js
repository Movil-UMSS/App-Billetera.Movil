import React , {useState} from 'react'
import { SafeAreaView, Text, View, StyleSheet, TextInput,TouchableOpacity } from 'react-native'
import {global} from '../styles/global'
import QRCode from 'react-native-qrcode-svg';

const GeneradorQR = () => {
    const [inputText, setInputText] = useState('');
  const [qrvalue, setQrvalue] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          Generar el codigo QR por cobro
        </Text>
        <QRCode
          //QR code value
          value={qrvalue ? qrvalue : 'NA'}
          //size of QR Code
          size={250}
          //Color of the QR Code (Optional)
          color="black"
          //Background Color of the QR Code (Optional)
          backgroundColor="white"
          //Logo of in the center of QR Code (Optional)
          logo={require('../imagen/icon.png')}
          //Center Logo size  (Optional)
          logoSize={30}
          //Center Logo margin (Optional)
          logoMargin={2}
          //Center Logo radius (Optional)
          logoBorderRadius={15}
          //Center Logo background (Optional)
          logoBackgroundColor="black"
        />
        <Text style={styles.textStyle}>
          Por favor, ingresar el valor en Bs
        </Text>
        <TextInput
          style={global.input}
          onChangeText={
            (inputText) => setInputText(inputText)
          }
          placeholder="Ingresar numero"
          value={inputText}
          keyboardType={'numeric'}
          maxLength={4}
        />
        <TouchableOpacity style={global.ingresarButton} onPress={() => setQrvalue(inputText)}>
          <Text style={global.ingresarButtonText}>
            Generador
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GeneradorQR
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textStyle: {
    textAlign: 'center',
    margin: 10,
  },
  textInputStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#51D8C7',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#51D8C7',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 30,
    padding: 10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});
