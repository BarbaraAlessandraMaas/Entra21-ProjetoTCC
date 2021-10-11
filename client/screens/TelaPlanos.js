import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Modal, Image } from "react-native";
import { useFonts } from 'expo-font';
import { List } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

export function TelaPlanos() {
    const [modalOpen, setModalOpen] = useState(false);

    useFonts({ 'Roboto': require('../assets/Roboto-Regular.ttf') });

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.textPlanos}>Planos</Text>
            <View>

            </View>
            <TouchableOpacity style={styles.buttons} onPress={() => setModalOpen(true)}>
                <Text style={styles.buttonText}>Adquira</Text>
            </TouchableOpacity>
            <Modal visible={modalOpen} animationType="slide">
                <View style={styles.modalContent}>
                    <Image source={require("../assets/logo.png")} style={styles.image} />
                    <Text style={styles.modalText}>Estes são todos os planos disponíveis na sua região.</Text>
                    <Text style={styles.modalText}>Para adquirir novos planos, visite a empresa Exus mais próxima de você!</Text>
                    <TouchableOpacity style={styles.buttons} onPress={() => setModalOpen(false)}><Text style={styles.buttonText}>Continuar</Text></TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textPlanos: {
        paddingTop: StatusBar.currentHeight,
        marginTop: 15
    },
    buttons: {
        margin: 20,
        width: 120,
        paddingVertical: 10,
        backgroundColor: "#36B8B8",
        textAlign: "center",
        alignSelf: "center",
        marginTop: 80
    },
    buttonText: {
        fontFamily: "Roboto",
        color: "white",
        fontSize: 18,
        textAlign: "center"
    },
    modalContent: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 50
    },
    image: {
        width: 130,
        height: 130,
        marginBottom: 50
    },
    modalText: {
        textAlign: "center",
        fontSize: 18,
        marginTop: 30
    }
});