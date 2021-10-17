import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Modal, TouchableOpacity, TextInput } from "react-native";
import { OptionBar } from "../components/OptionBar";
import { user } from "../screens/TelaInicio";
import { Ionicons } from "@expo/vector-icons";
import { DadosCliente } from "../components/DadosCliente";

export function MinhaConta({ navigation }) {
    const [modalOpen, setModalOpen] = useState(null);

    return (
        <View style={styles.container}>
            <OptionBar nome={user.ds_nome} dados={user.ds_email} />

            <View style={styles.content}>
                <View style={styles.containerIcon}>
                    <View style={styles.icon}>
                        <Ionicons name="person-circle-sharp" size={70} color="white" />
                    </View>

                    <View><Text style={styles.title}>Sua Conta</Text></View>
                </View>

                <View style={styles.containerDados}>
                    <Text style={styles.textDados}>Informações de perfil:</Text>

                    <ScrollView style={styles.containerInformation}>
                        <DadosCliente
                            name={user.ds_nome}
                            email={user.ds_email}
                            telefone={user.ds_telefone}
                            cpf={user.nr_cpf}
                        />
                    </ScrollView>

                    <TouchableOpacity>
                        <Text style={styles.buttonAlterar} onPress={() => setModalOpen(true)}>Alterar Dados</Text>
                    </TouchableOpacity>
                </View>
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

                <View style={styles.background}>
                    <Text style={styles.modalTitle}>Alterar Dados</Text>

                    <Text style={styles.textUp}>Endereço de E-mail:</Text>
                    <TextInput style={styles.input} placeholder="E-mail"></TextInput>

                    <Text style={styles.textUp}>Número de Telefone:</Text>
                    <TextInput style={styles.input} placeholder="Telefone"></TextInput>

                    <Text style={styles.textUp}>Nova Senha:</Text>
                    <TextInput style={styles.input} placeholder="Senha"></TextInput>

                    <TouchableOpacity>
                        <Text style={styles.buttonConfirm} onPress={() => setModalOpen(false)}>Confirmar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    content: {
        display: "flex",
        height: "100%",
        justifyContent: "center",
        marginTop: -55
    },
    containerIcon: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#36B8B8",
        borderTopLeftRadius: 15,
        marginHorizontal: 20,
        marginTop: 20
    },
    icon: {
        paddingVertical: 15,
        paddingLeft: 20
    },
    title: {
        marginLeft: 10,
        fontSize: 24,
        color: "white"
    },
    containerDados: {
        backgroundColor: "#EAEAEA",
        marginHorizontal: 20,
        height: 420,
    },
    textDados: {
        color: "#333333",
        fontSize: 18,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    containerInformation: {
        marginHorizontal: 20,
        backgroundColor: "white",
        borderRadius: 5,
        marginBottom: 20
    },
    buttonAlterar: {
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "#36B8B8",
        color: "white",
        fontSize: 18,
        paddingVertical: 15
    },

    // Style Modal
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
    background: {
        flex: 1,
        backgroundColor: "#183557",
        height: "100%",
        justifyContent: "center"
    },
    modalTitle: {
        fontSize: 18,
        color: "white",
        textAlign: "center",
        marginBottom: 30,
        marginHorizontal: 30
    },
    input: {
        marginHorizontal: 40,
        backgroundColor: "white",
        marginTop: 15,
        marginBottom: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 18
    },
    textUp: {
        fontSize: 14,
        marginHorizontal: 40,
        color: "white",
        marginTop: 15
    },
    buttonConfirm: {
        width: 200,
        backgroundColor: "#36B8B8",
        alignSelf: "center",
        textAlign: "center",
        color: "white",
        fontSize: 18,
        marginTop: 50,
        paddingVertical: 12,
        borderRadius: 5
    }
});