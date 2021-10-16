import React from "react";
import { StyleSheet, StatusBar, View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function ArrowBack(props) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="white" backgroundColor="#183557" />

            <View style={styles.status}>
                <TouchableOpacity style={styles.arrow}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.textPlanos}>{props.text}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.2
    },
    status: {
        backgroundColor: "#183557",
        display: "flex",
        borderBottomRightRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 12
    },
    arrow: {
        marginTop: 15,
        marginBottom: 20,
        marginLeft: 25,
        marginRight: 15
    },
    textPlanos: {
        marginTop: 15,
        marginBottom: 20,
        fontSize: 18,
        color: "white"
    }
});