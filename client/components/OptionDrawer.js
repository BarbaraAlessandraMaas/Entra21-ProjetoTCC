import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function OptionDrawer(props) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Ionicons name={props.icon} size={30} color="black" />
                <Text style={styles.textInDrawer}>{props.text}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contaner: {
        flex: 1
    },
    content: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#EAEAEA",
        marginVertical: 18,
        marginLeft: 20,
        alignItems: "center"
    },
    textInDrawer: {
        fontSize: 18,
        paddingLeft: 18,
        borderColor: "white"
    }
});