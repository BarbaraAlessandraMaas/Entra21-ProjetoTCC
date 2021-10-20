import React, { useState } from "react";
import { View, StyleSheet, FlatList, TextInput, TouchableOpacity } from "react-native";
import { ArrowBack } from "../components/ArrowBack";
import { ChatMessage } from "../components/ChatMessage"
import { Ionicons } from "@expo/vector-icons";

export function TelaChat() {
    const data = new Date();
    const dataFormatada = `${data.getHours()}:${data.getMinutes()}`;
    const currentClient = { cd_cliente: 0 };

    const CONTENT = [
        {
            cd_funcionario: 1,
            cd_cliente: 1,
            ds_mensagem: "Olá, seja bem vindo(a) ao chat de assistência!",
            dt_mensagem: dataFormatada
        },
        {
            cd_funcionario: 1,
            cd_cliente: 1,
            ds_mensagem: "Aqui você pode sanar as suas dúvidas de maneira mais específica.",
            dt_mensagem: dataFormatada
        },
        {
            cd_funcionario: 1,
            cd_cliente: 1,
            ds_mensagem: "Em que podemos ajudar?",
            dt_mensagem: dataFormatada
        }
    ]

    const [message, setMessage] = useState(CONTENT);

    function renderMessage({ item }) {
        const self = item.cd_cliente === currentClient.cd_cliente

        return (
            <ChatMessage message={item.ds_mensagem} date={item.dt_mensagem} self={self} />
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <ArrowBack text="SUPORTE" />

                <FlatList
                    style={styles.scroll}
                    data={message}
                    renderItem={renderMessage}
                    keyExtractor={item => "" + item.cd_cliente}
                />
            </View>

            <View style={styles.send}>
                <TextInput
                    style={styles.input}
                    placeholder="Mensagem"
                />

                <TouchableOpacity style={styles.sendButton}>
                    <Ionicons name="send" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textMessage: {
        marginHorizontal: 30
    },
    content: {
        backgroundColor: "#EAEAEA",
        height: "100%",
        marginBottom: -75
    },
    scroll: {
        flex: 1,
        marginTop: -30,
        height: "100%",
        marginBottom: 90
    },
    send: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#183557",
        flexDirection: "row",
        height: 75
    },
    input: {
        height: 40,
        backgroundColor: "white",
        paddingLeft: 15,
        fontSize: 18,
        marginLeft: 15,
        width: 290,
        borderRadius: 5
    },
    sendButton: {
        backgroundColor: "#36B8B8",
        height: 40,
        justifyContent: "center",
        paddingHorizontal: 12,
        marginRight: 15,
        borderRadius: 5
    }
});