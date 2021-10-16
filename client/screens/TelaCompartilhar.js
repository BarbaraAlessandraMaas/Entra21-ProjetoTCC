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

export function TelaCompartilhar() {

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.title}>Plano 500 MEGA</Text>
                <Text style={styles.text}>Fibra Óptica</Text>
            </View>
            <View style={styles.container2}>
            </View>
            <View style={styles.container3}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Compartilhar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
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
    container1: {
        display: "flex",
        justifyContent: "space-around",
        height: 100,
        width: 270,
        marginBottom: 30
    },
    container2: {
        width: 270,
        height: 350,
        alignItems: "center",
        justifyContent: "space-around",
        borderColor: "#EAEAEA",
        borderStyle: "solid",
        borderWidth: 2,
        marginBottom: 30
    },
    titleLate: {
        color: "red",
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
        textAlign: "center",
        color: "white",
        fontSize: 20,
    }


})