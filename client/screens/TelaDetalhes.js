import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const planos = [
    {
        vl_internet: "500 MEGA", mi: "Fibra Óptica",
        pagamentos: [
            {
                valor: "R$ 200,00",
                status: "Em Atraso",
                data_vencimento: "21/3/2021"
            }
        ]
    },
]

export function TelaDetalhes() {

    return (
        <View style={styles.container}>
            <View style={styles. container1}>
                <View>
                    <Text style={styles.title}>Plano 500 MEGA</Text>
                    <Text style={styles.text}>Fibra Óptica</Text>
                </View>
                <View>
                    <Text style={styles.text}>Boleto</Text>
                    <Text style={styles.title}>R$ 200,00</Text>
                </View>
            </View>
            <View style={styles.container2}>
                <View>
                    <Text style={styles.text}>Data Vencimento: 21/9/2021</Text>
                </View>
                <View>
                    <Text style={styles.titleLate}>Em atraso</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Compartilhar</Text>
                    </TouchableOpacity>
                </View>
                </View>          
        </View>
    )
}

const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    },
    text: {
        fontSize: 15,
        color: "black"
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        color: "black"
    },
    container1:{
        display: "flex",
        justifyContent: "space-between",
        height: 200,
        width: 270
    },
    container2: {
        width: 270,
        height: 200,
        alignItems: "center",
        justifyContent: "space-around",
        borderColor: "#EAEAEA",
        borderStyle: "solid",
        borderWidth: 2
    },
    titleLate: {
        color:"red",
        fontSize: 20,
        marginVertical: 10
    },
    button: {
        backgroundColor: "#36B8B8",
        borderRadius: 10,
        width: 170,
        height: 40,
        padding: 5
    },
    buttonText: {
        textAlign:"center",
        color: "white",
        fontSize: 20,
    }

    
})