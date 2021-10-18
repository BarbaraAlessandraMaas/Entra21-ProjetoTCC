import React, { useRef, useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Modal, Image, LayoutAnimation } from "react-native";
import { useFonts } from "expo-font";
import { ArrowBack } from "../components/ArrowBack";
import { ExpandableList } from "../components/ExpandableList";

const CONTENT = [
    {
        isExpanded: false,
        ds_velocidade: "100 MEGA",
        subcategory: [
            {
                id: 1,
                vl_plano: "R$ 80,00",
                ds_plano: "Download até 100 MEGA, Wi-fi"
            }
        ]
    },
    {
        isExpanded: false,
        ds_velocidade: "200 MEGA",
        subcategory: [
            {
                id: 2,
                vl_plano: "R$ 100,00",
                ds_plano: "Download até 200 MEGA, Wi-fi"
            }
        ]
    },
    {
        isExpanded: false,
        ds_velocidade: "250 MEGA",
        subcategory: [
            {
                id: 3,
                vl_plano: "R$ 130,00",
                ds_plano: "Download até 250 MEGA, Wi-fi"
            }
        ]
    },
    {
        isExpanded: false,
        ds_velocidade: "500 MEGA",
        subcategory: [
            {
                id: 4,
                vl_plano: "R$ 160,00",
                ds_plano: "Download até 500 MEGA, Wi-fi"
            }
        ]
    },
    {
        isExpanded: false,
        ds_velocidade: "1000 MEGA",
        subcategory: [
            {
                id: 5,
                vl_plano: "R$ 250,00",
                ds_plano: "Download até 1000 MEGA, Wi-fi"
            }
        ]
    }
]

export function TelaPlanos() {
    const [modalOpen, setModalOpen] = useState(false);
    const [listDataSource, setListDataSource] = useState(CONTENT);
    const scrollRef = useRef(null);

    const updateLayout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listDataSource];

        // Permite a seleção simples
        array.map((value, placeindex) =>
            placeindex === index
                ? (array[placeindex]["isExpanded"]) = !array[placeindex]["isExpanded"]
                : (array[placeindex]["isExpanded"]) = false
        );

        index >= 2
            ? scrollRef.current.scrollToEnd({ animated: true })
            : scrollRef.current.scrollTo({ x: 0, y: 0, animated: true });

        setListDataSource(array);
    }

    useFonts({ 'Roboto': require('../assets/Roboto-Regular.ttf') });

    return (
        <View style={styles.container}>
            <ArrowBack text="PLANOS" />
            <ScrollView style={styles.list} ref={scrollRef}>
                {
                    listDataSource.map((item, key) => (
                        <ExpandableList
                            key={item.ds_velocidade}
                            item={item}
                            onClickFunction={() => {
                                updateLayout(key);
                            }}
                        />
                    ))
                }
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.buttons} onPress={() => setModalOpen(true)}>
                    <Text style={styles.buttonText}>Adquira</Text>
                </TouchableOpacity>
            </View>


            <Modal visible={modalOpen} animationType="slide">
                <View style={styles.modalContent}>
                    <Image source={require("../assets/logo.png")} style={styles.image} />

                    <Text style={styles.modalText}>
                        Estes são todos os planos disponíveis na sua região. {"\n\n"}
                        Para adquirir um plano, visite a empresa Exus mais próxima de você!
                    </Text>

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
        flex: 1,
        top: 0,
        marginHorizontal: 30
    },
    headerButton: {
        textAlign: "center",
        justifyContent: "center",
        fontSize: 18
    },
    footer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    buttons: {
        width: 140,
        paddingVertical: 12,
        paddingHorizontal: 30,
        backgroundColor: "#EAEAEA",
        textAlign: "center",
        borderRadius: 5,
        marginVertical: 50
    },
    buttonText: {
        fontFamily: "Roboto",
        color: "#3A3A3A",
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
        marginTop: 30,
        paddingBottom: 50
    }
});