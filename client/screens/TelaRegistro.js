import React from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Text, ScrollView } from "react-native"
import { ArrowBack } from "../components/ArrowBack";
import { Ionicons } from "@expo/vector-icons";

export function TelaRegistro({ navigation }) {
    const [nome, setNome] = React.useState("");
    const [cpf, setCpf] = React.useState("");
    const [celular, setCelular] = React.useState("");

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <ArrowBack text="REGISTRO" />

                <ScrollView style={styles.form}>
                    <TextInput
                        onChangeText={setNome}
                        value={nome}
                        placeholder="NOME"
                        style={styles.input}
                    />

                    <TextInput
                        onChangeText={setCpf}
                        value={cpf}
                        placeholder="CPF"
                        style={styles.input}
                    />

                    <TextInput
                        onChangeText={setCelular}
                        value={celular}
                        placeholder="CELULAR"
                        style={styles.input}
                    />

                    <TouchableOpacity style={styles.buttonInput} onPress={() => navigation.navigate("TelaEndereco")}>
                        <Text style={styles.textButtonInput}>ENDEREÇO</Text>
                        <Ionicons name="chevron-forward" size={24} color="#757575" />
                    </TouchableOpacity>
                </ScrollView>

                <View style={{ marginBottom: 50 }}>
                    <TouchableOpacity style={styles.buttonNext}>
                        <Text style={styles.textButtonNext}>Próximo</Text>
                    </TouchableOpacity>
                </View>
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
        marginTop: 80,
        paddingBottom: 150
    },
    input: {
        height: 55,
        fontSize: 18,
        paddingLeft: 15,
        marginBottom: 40,
        backgroundColor: "white"
    },
    buttonInput: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
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
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 90,
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 3
    },
    textButtonNext: {
        fontSize: 18,
        color: "white"
    }
});