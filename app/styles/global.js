import { StyleSheet } from "react-native";

export const global = StyleSheet.create({
    container:{
        padding:30
    },
    fixToText: {
        padding:15,
        borderColor:'black',
        borderRadius:5,
        borderWidth:1,
        marginTop:15,
        borderStyle:'dotted',
        flexDirection:'column',
        alignItems:'center'
        //justifyContent:'space-between'
    },
    rectangulo:{
        padding:15,
        borderColor:'black',
        borderRadius:15,
        borderWidth:1,
        marginTop:15,
        //borderStyle:'dotted',
    },
    fixToTextCuenta:{
        padding:15,
        borderColor:'black',
        borderRadius:5,
        borderWidth:1,
        marginTop:15,
        borderStyle:'dotted',
        flexDirection:'column',
        //justifyContent:'space-between'
    }
    ,
    textTitulo:{
        fontSize:20,
        fontWeight:'bold' 
    },
    negritatext:{
        fontWeight:'bold'
    },
    ingresarButtonText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#fafafa',
        alignSelf: 'center',
    },
    ingresarButton: {
        backgroundColor: '#f57f17',
        paddingVertical: 12,
        borderRadius: 6,
        marginTop: 20,
        width: '50%',
        alignSelf:'center'
    },
    input: {
        width: '50%',
        height: 50,
        backgroundColor: '#d9e3f0',
        borderRadius: 6,
        
        paddingHorizontal: 10,
        fontSize: 14,
        color: '#808e9b',
        flexDirection: 'row',
        
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,

    },
})