import React, { useRef, useState } from "react";
import { Modal, StyleSheet, View, Text, TouchableOpacity, DrawerLayoutAndroid, StatusBar } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { OptionDrawer } from "../components/OptionDrawer";

export function TelaOpcoes() {
    const [modalOpen, setModalOpen] = useState(false);
    const drawer = useRef(null);

    const navigationView = () => (
        <View style={styles.inDrawer}>
            <TouchableOpacity style={styles.buttonClose} onPress={() => drawer.current.closeDrawer()}>
                <Ionicons name="close" size={30} color="black" />
            </TouchableOpacity>

            <TouchableOpacity>
                <OptionDrawer icon="help" text="Ajuda" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModalOpen(true)}>
                <OptionDrawer icon="document-text-outline" text="Sobre" />
            </TouchableOpacity>
            
            <TouchableOpacity>
                <OptionDrawer icon="log-out-outline" text="Log Out" />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <DrawerLayoutAndroid
                ref={drawer}
                drawerWidth={300}
                drawerPosition={"left"}
                renderNavigationView={navigationView}
            >
                <View style={styles.outDrawer}>
                    <StatusBar barStyle="dark-content" backgroundColor="white" />

                    <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
                        <Ionicons name="menu" size={30} color="black" />
                    </TouchableOpacity>
                </View>
            </DrawerLayoutAndroid>

            <Modal visible={modalOpen} animationType="slide">
                <View style={styles.modalSobre}>
                    <TouchableOpacity style={styles.arrow} onPress={() => setModalOpen(false)}>
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </TouchableOpacity>
                    
                    <View style={styles.text}>
                        <Text style={styles.textModalTop}>
                            Este aplicativo é um projeto desenvolvido no curso de React /React Native do Entra21, em Timbó, para o Trabalho de Conclusão de Curso (TCC).
                        </Text>
                        <Text style={styles.textModalBottom}>
                            Desenvolvido pela equipe App-in Five, 2021.
                        </Text>
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
    inDrawer: {
        height: "100%",
        backgroundColor: "#EAEAEA"
    },
    buttonClose: {
        marginHorizontal: 20,
        marginVertical: 20,
        paddingBottom: 30
    },
    outDrawer: {
        marginTop: 15,
        marginLeft: 20
    },
    modalSobre: {
        backgroundColor: "#183557",
        height: "100%"
    },
    textModalTop: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
        marginHorizontal: 50,
        paddingBottom: 300,
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
    arrow: {
        backgroundColor: "#183557",
        paddingTop: 15,
        paddingBottom: 20,
        paddingLeft: 25
    },
    text: {
        height: "100%",
        justifyContent: "center"
    }
});