import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import { Ionicons } from '@expo/vector-icons';
export function OptionsBar(props) {
    if (!props.dados) {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="white" backgroundColor="#183557" />
                <View style={styles.status}>
                    <TouchableOpacity style={styles.bars}>
                        <Ionicons name="menu" size={27} color="white" />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.textNome2}>{props.nome}</Text>
                    </View>
                </View>
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="white" backgroundColor="#183557" />
                <View style={styles.status}>
                    <TouchableOpacity style={styles.bars}>
                        <Ionicons name="menu" size={27} color="white" />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.textNome}>{props.nome}</Text>
                        <Text style={styles.textEmail}>{props.dados}</Text>
                    </View>
                </View>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    status: {
        backgroundColor: "#183557",
        borderBottomRightRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 10
    },
    bars: {
        marginRight: 15,
        marginLeft: 15
    },
    textNome: {
        lineHeight: 25,
        marginTop: 15,
        fontSize: 18,
        color: "white"
    },
    textNome2: {
        lineHeight: 25,
        marginTop: 17,
        marginBottom: 20,
        fontSize: 18,
        color: "white"
    },
    textEmail: {
        lineHeight: 25,
        marginBottom: 15,
        fontSize: 14,
        color: "white"
    },
    container: {
        display: "flex",
        alignContent: "center"
    }
});