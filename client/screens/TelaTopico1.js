import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, Modal } from "react-native";
import { ArrowBack } from "../components/ArrowBack";
import { HelpSolution } from "../components/HelpSolution";
import { Ionicons } from "@expo/vector-icons";

export function TelaTopico1(props) {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <View style={styles.container}>
            <ArrowBack text="TÓPICO" />

            <ScrollView style={styles.information}>
                <Text style={styles.textInformation}>1.Desligue o modem e ligue novamente;</Text>
                <Text style={styles.textInformation}>
                    2.Com o modem ligado, analise o painel frontal e perceba qualquer sinal estranho
                    em sua série de luzes.Se o seu modem DSL pára de funcionar, essas luzes podem
                    parar de piscar, virar uma cor avermelhada ou desligar completamente;
                </Text>
                <Text style={styles.textInformation}>3.Consulte o manual do modem sobre a combinação de luzes que significam o erro.</Text>
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
    },
    textInformation: {
        fontSize: 16,
        color: "#333333",
        paddingVertical: 15,
        textAlign: "justify"
    }
});