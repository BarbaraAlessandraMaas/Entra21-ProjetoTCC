import React from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from "react-native"
import { ArrowBack } from "../components/ArrowBack";
import { Ionicons } from "@expo/vector-icons";

export function TelaRegistro({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <ArrowBack text="REGISTRO" />

                <View style={styles.form}>
                    <TextInput
                        placeholder="NOME"
                        style={styles.input}
                    />

                    <TextInput
                        placeholder="CPF"
                        style={styles.input}
                    />

                    <TextInput
                        placeholder="CELULAR"
                        style={styles.input}
                    />

                    <TouchableOpacity style={styles.buttonInput} onPress={() => navigation.navigate("TelaEndereco")}>
                        <Text style={styles.textButtonInput}>ENDEREÇO</Text>
                        <Ionicons name="chevron-forward" size={24} color="#757575" />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.buttonNext}>
                    <Text style={styles.textButtonNext}>Próximo</Text>
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
        height: "100%",
        backgroundColor: "#EAEAEA"
    },
    form: {
        flex: 1,
        marginHorizontal: 40,
        marginTop: 80
    },
    input: {
        height: 55,
        fontSize: 18,
        paddingLeft: 15,
        marginBottom: 50,
        backgroundColor: "white"
    },
    buttonInput: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginBottom: 50,
        height: 55,
        alignItems: "center",
        borderRadius: 5
    },
    textButtonInput: {
        fontSize: 18,
        color: "#757575"
    },
    buttonNext: {
        backgroundColor: "#36B8B8",
        paddingHorizontal: 20,
        marginVertical: 50,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 90,
        borderRadius: 5
    },
    textButtonNext: {
        fontSize: 18,
        color: "white"
    }
});