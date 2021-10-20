import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Modal, ScrollView, FlatList } from "react-native";
import { ArrowBack } from "../components/ArrowBack";
import { Ionicons } from "@expo/vector-icons";
import { initialState } from "./TelaRegistro";

export function TelaEndereco({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [state, setState] = useState(initialState);

    const municipios = [
        { id: 1, title: "Timbó" },
        { id: 2, title: "Blumenau" },
        { id: 3, title: "Indaial" },
        { id: 4, title: "Pomerode" },
        { id: 5, title: "Rodeio" },
        { id: 6, title: "Florianópolis" },
        { id: 7, title: "Joinville" },
        { id: 8, title: "Penha" },
        { id: 9, title: "Navegantes" }
    ];

    function handleLogradouroChange(text) {
        setState(prevState => ({
            ...prevState,
            logradouro: text
        }));
    }

    function handleBairroChange(text) {
        setState(prevState => ({
            ...prevState,
            bairro: text
        }));
    }

    function handleComplementoChange(text) {
        setState(prevState => ({
            ...prevState,
            complemento: text
        }));
    }

    const Item = ({ item, onPress, backgroundColor, textColor }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
            <Text style={[styles.title, textColor]}>{item.title}</Text>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#36B8B8" : "#EAEAEA";
        const color = item.id === selectedId ? "white" : "black";

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
                value={state.municipio}
            />
        );
    };

    const handleCidadeChange = () => {
        initialState.municipio = municipios[selectedId - 1].title
        setModalOpen(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <ArrowBack text="ENDEREÇO" />

                <ScrollView style={styles.form}>
                    <TextInput
                        onChangeText={text => handleLogradouroChange(text)}
                        value={state.logradouro}
                        placeholder="LOGRADOURO"
                        style={styles.input}
                    />
                    <TextInput
                        onChangeText={text => handleBairroChange(text)}
                        value={state.bairro}
                        placeholder="BAIRRO"
                        style={styles.input}
                    />

                    <TouchableOpacity style={styles.buttonInput} onPress={() => setModalOpen(true)}>
                        <Text style={styles.textButtonInput}>MUNICÍPIO</Text>
                        <Ionicons name="chevron-down-outline" size={24} color="#757575" />
                    </TouchableOpacity>

                    <TextInput
                        onChangeText={text => handleComplementoChange(text)}
                        value={state.complemento}
                        placeholder="COMPLEMENTO"
                        style={styles.input}
                    />
                </ScrollView>

                <View style={{ marginBottom: 50 }}>
                    <TouchableOpacity style={styles.buttonConfirm} onPress={() => navigation.navigate("TelaRegistro")}>
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
                        <FlatList
                            data={municipios}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    <TouchableOpacity style={styles.buttonConfirm}>
                        <Text style={styles.textButtonConfirm} onPress={handleCidadeChange}>Confirmar</Text>
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
        height: 474,
        marginHorizontal: 10,
        padding: 2
    },
    textDown: {
        textDecorationLine: "underline",
        fontSize: 18,
        color: "black",
        textAlign: "center",
        marginTop: 50
    },
    item: {
        alignItems: "center",
        marginVertical: 1,
        marginHorizontal: 3,
        height: 50,
        padding: 8
    },
    title: {
        fontSize: 20,
    },
    buttonModalText: {
        color: "black"
    }
});