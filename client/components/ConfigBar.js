import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, StatusBar, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { OptionSwitch } from "./OptionSwitch";

export function ConfigBar(props) {
    const [modalOpen, setModalOpen] = useState(null);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="white" backgroundColor="#183557" />

            <View style={styles.status}>
                <TouchableOpacity style={styles.menuButton} onPress={() => props.navigation.navigate("TelaOpcoes")}>
                    <Ionicons name="menu" size={27} color="white" />
                </TouchableOpacity>

                <View>
                    <Text style={styles.textInitialScreen}>{props.nome}</Text>
                </View>

                <View style={styles.optionsButton}>
                    <TouchableOpacity onPress={() => setModalOpen(true)} style={styles.settings}>
                        <Ionicons name="settings-sharp" size={24} color="white" />
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
                    <OptionSwitch 
                        title="Atualizações"
                        description="Ao desativar esta opção, você não receberá mais as atualizações dos planos."
                    />

                    <OptionSwitch
                        title="Novidades"
                        description="Esta opção permite que você receba as novidades dos planos existentes, e de planos novos. Ao desativar, você nçao recerá mais essas novidades."
                    />

                    <OptionSwitch
                        title="Gerais"
                        description="Notifica o status atual dos serviços, caso estejam com algum problema. Desativar essa opção irá fazer com que você não receba mais notificações gerais."
                    />
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignContent: "center"
    },
    status: {
        display: "flex",
        backgroundColor: "#183557",
        borderBottomRightRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 10
    },
    menuButton: {
        marginRight: 15,
        marginLeft: 15
    },
    textInitialScreen: {
        lineHeight: 25,
        marginTop: 17,
        marginBottom: 20,
        fontSize: 18,
        color: "white"
    },
    optionsButton: {
        flex: 1
    },
    settings: {
        alignItems: "flex-end",
        marginRight: 25
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
    background: {
        backgroundColor: "#EAEAEA",
        height: "100%"
    }
});