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
        flexDirection:'row',
        justifyContent:'space-between'
    }
    ,
    textTitulo:{
        fontSize:20,
        fontWeight:'bold' 
    },
    negritatext:{
        fontWeight:'bold'
    }
})