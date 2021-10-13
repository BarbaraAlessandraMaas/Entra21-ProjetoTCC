import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Modal, Image, LayoutAnimation, Platform, UIManager } from "react-native";
import { useFonts } from 'expo-font';
import { ArrowBack } from "../components/ArrowBack";
import { ExpandableList } from "../components/ExpandableList";

const CONTENT = [
    {
        isExpanded: false,
        categoryName: "100 MEGA",
        subcategory: [
            { id: 1, val: "Descrição" }
        ]
    },
    {
        isExpanded: false,
        categoryName: "250 MEGA",
        subcategory: [
            { id: 2, val: "Descrição" }
        ]
    },
    {
        isExpanded: false,
        categoryName: "500 MEGA",
        subcategory: [
            { id: 3, val: "Descrição" }
        ]
    },
    {
        isExpanded: false,
        categoryName: "1000 MEGA",
        subcategory: [
            { id: 4, val: "Descrição" }
        ]
    }
]

export function TelaPlanos() {
    const [modalOpen, setModalOpen] = useState(false);
    const [listDataSource, setListDataSource] = useState(CONTENT);

    if (Platform.OS === "android") {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const updateLayout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listDataSource];

        // array[index]["isExpanded"] = !array[index]["isExpanded"]; //Multipla Seleção

        array.map((value, placeindex) =>
            placeindex === index
            ? (array[placeindex]["isExpanded"]) = !array[placeindex]["isExpanded"]
            : (array[placeindex]["isExpanded"]) = false
        );

        setListDataSource(array);
    }

    useFonts({ 'Roboto': require('../assets/Roboto-Regular.ttf') });

    return (
        <View style={styles.container}>
            <ArrowBack text="PLANOS" />
            <ScrollView style={styles.list}>
                {
                    listDataSource.map((item, key) => (
                        <ExpandableList
                            key={item.categoryName}
                            item={item}
                            onClickFunction={() => {
                                updateLayout(key);
                            }}
                        />
                    ))
                }
            </ScrollView>
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
    list: {
        marginHorizontal: 30
    },
    headerButton: {
        textAlign: "center",
        justifyContent: "center",
        fontSize: 18
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