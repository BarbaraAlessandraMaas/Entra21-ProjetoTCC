import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { ArrowBack } from "../components/ArrowBack";

export function TelaCidade() {
    return (
        <View style={styles.container}>
            <ArrowBack text="PLANO INDISPONÍVEL" />

            <View style={styles.content}>
                <Text style={styles.textContent}>
                    Desculpe, ainda não temos planos disponíveis na sua região.
                    Pedimos a sua contribuição para informar o município que você
                    gostaria que tivessem planos.
                </Text>

                <TouchableOpacity>
                    <Text style={styles.buttonConclude}>Concluir</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 0.7,
        marginHorizontal: 30,
        justifyContent: "center",
    },
    textContent: {
        paddingTop: 20,
        textAlign: "center",
        fontSize: 18,
        lineHeight: 24
    },
    selectCity: {
        backgroundColor: "#EAEAEA",
        height: 60,
        borderRadius: 5,
        marginTop: 60,
        paddingLeft: 15,
        fontSize: 18
    },
    buttonConclude: {
        textAlign: "center",
        fontSize: 18,
        backgroundColor: "#36B8B8",
        marginHorizontal: 100,
        borderRadius: 5,
        paddingVertical: 12,
        color: "white",
        marginTop: 60
    }
});