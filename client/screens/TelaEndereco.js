import React, { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Modal, ScrollView } from "react-native";
import { ArrowBack } from "../components/ArrowBack";
import { Ionicons } from "@expo/vector-icons";

export function TelaEndereco({ navigation }) {
    const [logradouro, setLogradouro] = React.useState("");
    const [bairro, setBairro] = React.useState("");
    const [complemento, setComplemento] = React.useState("");
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <ArrowBack text="ENDEREÇO" />

                <ScrollView style={styles.form}>
                    <TextInput
                        onChangeText={setLogradouro}
                        value={logradouro}
                        placeholder="LOGRADOURO"
                        style={styles.input}
                    />
                    <TextInput
                        onChangeText={setBairro}
                        value={bairro}
                        placeholder="BAIRRO"
                        style={styles.input}
                    />

                    <TouchableOpacity style={styles.buttonInput} onPress={() => setModalOpen(true)}>
                        <Text style={styles.textButtonInput}>MUNICÍPIO</Text>
                        <Ionicons name="chevron-down-outline" size={24} color="#757575" />
                    </TouchableOpacity>

                    <TextInput
                        onChangeText={setComplemento}
                        value={complemento}
                        placeholder="COMPLEMENTO"
                        style={styles.input}
                    />
                </ScrollView>

                <View style={{ marginBottom: 50 }}>
                    <TouchableOpacity style={styles.buttonConfirm}>
                        <Text style={styles.textButtonConfirm}>Confirmar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal visible={modalOpen} animationType="slide">
                <View style={styles.viewIcon}>
                    <TouchableOpacity onPress={() => setModalOpen(false)}>
                        <Ionicons name="arrow-up" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalOpen(false)}>
                        <Text style={styles.textIcon}>Voltar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.background}>
                    <Text style={styles.textUp}>Selecione seu município de residência:</Text>
                    <View style={styles.modalContent}>

                    </View>
                    <TouchableOpacity>
                        <Text style={styles.textDown} onPress={() => navigation.navigate("TelaCidade")}>Não encontrou sua cidade?</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        backgroundColor: "#183557",
        height: "100%"
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
        marginBottom: 50,
        height: 55,
        alignItems: "center",
        borderRadius: 5
    },
    textButtonInput: {
        fontSize: 18,
        color: "#757575"
    },
    buttonConfirm: {
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
    textButtonConfirm: {
        fontSize: 18,
        color: "white"
    },
    viewIcon: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#EAEAEA",
        paddingLeft: 15,
        paddingTop: 25
    },
    textIcon: {
        paddingLeft: 15,
        fontSize: 18,
        color: "black"
    },
    textUp: {
        backgroundColor: "#EAEAEA",
        fontSize: 18,
        textAlign: "center",
        marginBottom: 50
    },
    background: {
        flex: 1,
        backgroundColor: "#EAEAEA",
        height: "100%",
        justifyContent: "center"
    },
    modalContent: {
        backgroundColor: "#183557",
        borderRadius: 20,
        height: 500,
        marginHorizontal: 10
    },
    textDown: {
        textDecorationLine: "underline",
        fontSize: 18,
        color: "black",
        textAlign: "center",
        marginTop: 50
    }
});