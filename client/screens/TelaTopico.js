import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, Modal } from "react-native";
import { ArrowBack } from "../components/ArrowBack";
import { HelpSolution } from "../components/HelpSolution";
import { Ionicons } from "@expo/vector-icons";

export function TelaTopico() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <View style={styles.container}>
            <ArrowBack text="TÓPICO" />

            <ScrollView style={styles.information}>
                <HelpSolution
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum."
                />
            </ScrollView>

            <View style={styles.contact}>
                <Text style={styles.textContact}>
                    Ainda precisa de ajuda? {"\n"}
                    Estamos aqui para te ajudar!
                </Text>

                <TouchableOpacity>
                    <Text style={styles.textButtonContact} onPress={() => setModalOpen(true)}>Entre em contato</Text>
                </TouchableOpacity>
            </View>

            <Modal visible={modalOpen} animationType="slide">
                <View style={styles.viewIcon}>
                    <TouchableOpacity onPress={() => setModalOpen(false)}>
                        <Ionicons name="arrow-up" size={24} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setModalOpen(false)}>
                        <Text style={styles.textIcon}>Voltar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.modalAssist}>
                    <View style={styles.content}>
                        <Text style={styles.textContent}>Como você deseja prosseguir?</Text>

                        <TouchableOpacity style={styles.buttonContent}>
                            <Ionicons name="chatbubble" size={24} color="white" />
                            <Text style={styles.textButtonContent}>Converse conosco</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonContent}>
                            <Ionicons name="call-sharp" size={24} color="white" />
                            <Text style={styles.textButtonContent}>Ligue-nos</Text>
                        </TouchableOpacity>
                        
                        <Text style={styles.textContent}>ou</Text>
                        <Text style={styles.textContent}>Visite a empresa Exus mais próxima de você!</Text>
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
    information: {
        flex: 1,
        marginHorizontal: 20,
        padding: 20,
        marginTop: 30,
        marginBottom: 30,
        borderWidth: 1,
        borderColor: "#EAEAEA"
    },
    contact: {
        backgroundColor: "#EAEAEA",
        marginBottom: 40,
        paddingVertical: 40
    },
    textContact: {
        textAlign: "center",
        fontSize: 18
    },
    textButtonContact: {
        paddingTop: 30,
        textAlign: "center",
        fontSize: 18,
        textDecorationLine: "underline"
    },
    viewIcon: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#183557",
        paddingLeft: 15,
        paddingTop: 25
    },
    textIcon: {
        paddingLeft: 15,
        fontSize: 18,
        color: "white"
    },
    modalAssist: {
        backgroundColor: "#183557",
        height: "100%",
        justifyContent: "center"
    },
    content: {
        backgroundColor: "#EAEAEA",
        marginHorizontal: 20,
        marginTop: -30,
        height: 550,
        justifyContent: "center",
        borderBottomRightRadius: 20
    },
    textContent: {
        textAlign: "center",
        fontSize: 18,
        marginVertical: 30,
        marginHorizontal: 30
    },
    buttonContent: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#36B8B8",
        marginHorizontal: 30,
        marginTop: 30,
        borderRadius: 5
    },
    textButtonContent: {
        textAlign: "center",
        fontSize: 18,
        color: "white",
        paddingLeft: 10,
        paddingVertical: 18
    }
});