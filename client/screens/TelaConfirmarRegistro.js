import React, { useState } from "react";
import { View, StyleSheet, StatusBar, TextInput, TouchableOpacity, Text, Modal } from "react-native";

export function TelaConfirmarRegistro() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="white" backgroundColor="#183557" />

            <View style={styles.topContent}>
                <TextInput
                    placeholder="EMAIL"
                    style={styles.input}
                />

                <TextInput
                    placeholder="SENHA"
                    style={styles.input}
                />

                <TextInput
                    placeholder="CONFIRMAR SENHA"
                    style={styles.input}
                />
            </View>

            <View style={styles.buttonsView}>
                <TouchableOpacity style={[styles.button, { backgroundColor: "#98D4D4" }]}>
                    <Text style={styles.textButton}>Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => setModalOpen(true)}>
                    <Text style={styles.textButton}>Próximo</Text>
                </TouchableOpacity>
            </View>

            <Modal visible={modalOpen} animationType="slide">
                <View style={styles.modalView}>
                    <Text style={styles.textModalTop}>
                        Bem vindo ao Exus!
                    </Text>
                    <Text style={styles.textModalBottom}>
                        Sua conta foi criada com sucesso. Clique em Continuar para acessá-la!
                    </Text>

                    <View style={styles.buttonView}>
                        <TouchableOpacity 
                            style={[styles.button, { backgroundColor: "#EAEAEA" }]}
                            onPress={() => setModalOpen(false)}
                        >
                            <Text style={[styles.textButton, { color: "#333333" }]}>Continuar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topContent: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#183557",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 50,
        flex: 8
    },
    input: {
        height: 55,
        fontSize: 18,
        paddingLeft: 15,
        marginBottom: 50,
        marginTop: 30,
        backgroundColor: "white"
    },
    buttonsView: {
        flex: 3,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: 30,
        alignItems: "center"
    },
    button: {
        backgroundColor: "#36B8B8",
        paddingHorizontal: 20,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        width: 135
    },
    textButton: {
        fontSize: 18,
        color: "white"
    },

    //Style modal
    modalView: {
        backgroundColor: "#183557",
        height: "100%",
        justifyContent: "center"
    },
    textModalTop: {
        color: "white",
        fontSize: 30,
        textAlign: "center",
        marginHorizontal: 50,
        paddingTop: 20,
        paddingBottom: 100,
        lineHeight: 24
    },
    textModalBottom: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
        marginHorizontal: 50,
        justifyContent: "center",
        lineHeight: 24
    },
    buttonView: {
        alignItems: "center",
        marginTop: 100
    }
});