import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import _ from "lodash"

const PersonasPorCobra = () => {
    const [ columns, setColumns ] = useState([
        "Id",
        "Nombre",
        "Valor",
        "Descripcion",
        "Fecha"
    ])
    const [ direction, setDirection ] = useState(null)
    const [ selectedColumn, setSelectedColumn ] = useState(null)
    const [ personas, setPersonas ] = useState([
        {
          Id: 1,
          Name: "Fabricio Colque",
          Valor: 100,
          Descripcion:"",
          Fecha: "15-06-21"

          
        },
        {
          Id: 2,
          Name: "Andres Flores",
          Valor: 150,
          Descripcion:"",
          Fecha: "17-06-21"
          
        },
        {
          Id: 3,
          Name: "Camilia Baigorria",
          Valor: 115,
          Descripcion:"",
          Fecha: "17-06-21"         
        },
        {
          Id: 4,
          Name: "Diego Mejia ",
          Valor: 130,
          Descripcion:"",
          Fecha: "20-06-21"
        }
        
    ])
    
    const sortTable = (column) => {
        const newDirection = direction === "desc" ? "asc" : "desc" 
        const sortedData = _.orderBy(personas, [column],[newDirection])
        setSelectedColumn(column)
        setDirection(newDirection)
        setPersonas(sortedData)
    }
    const tableHeader = () => (
        <View style={styles.tableHeader}>
            {
            columns.map((column, index) => {
              {
                return (
                  <TouchableOpacity 
                    key={index}
                    style={styles.columnHeader} 
                    onPress={()=> sortTable(column)}>
                    <Text style={styles.columnHeaderTxt}>{column + " "} 
                      { selectedColumn === column && <MaterialCommunityIcons 
                          name={direction === "desc" ? "arrow-down-drop-circle" : "arrow-up-drop-circle"} 
                        />
                      }
                    </Text>
                  </TouchableOpacity>
                )
              }
            })
          }
        </View>
    )
    
    return (
        <View style={styles.container}>
            <FlatList 
            data={personas}
            style={{width:"90%"}}
            keyExtractor={(item, index) => index+""}
            ListHeaderComponent={tableHeader}
            stickyHeaderIndices={[0]}
            renderItem={({item, index})=> {
                return (
                <View style={{...styles.tableRow, backgroundColor: index % 2 == 1 ? "#F0FBFC" : "white"}}>
                  <Text style={{...styles.columnRowTxt, fontWeight:"bold"}}>{item.Id}</Text>
                  <Text style={styles.columnRowTxt}>{item.Name}</Text>
                  <Text style={styles.columnRowTxt}>{item.Valor}</Text>
                  <Text style={styles.columnRowTxt}>{item.Descripcion}</Text>
                  <Text style={styles.columnRowTxt}>{item.Fecha}</Text>
                  
                  
                </View>
              )
            }}
          />
          <StatusBar style="auto" />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:80
      },
      tableHeader: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#37C2D0",
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        height: 50
      },
      tableRow: {
        flexDirection: "row",
        height: 40,
        alignItems:"center",
      },
      columnHeader: {
        width: "20%",
        justifyContent: "center",
        alignItems:"center"
      },
      columnHeaderTxt: {
        color: "white",
        fontWeight: "bold",
      },
      columnRowTxt: {
        width:"20%",
        textAlign:"center",
      }
    })


export default PersonasPorCobra
