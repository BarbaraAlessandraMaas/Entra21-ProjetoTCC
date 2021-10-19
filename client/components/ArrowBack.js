import React from "react";
import { StyleSheet, StatusBar, View, Text } from "react-native";

export function ArrowBack(props) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="white" backgroundColor="#183557" />

            <View style={styles.status}>
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
    textPlanos: {
        marginVertical: 20,
        fontSize: 18,
        color: "white",
        paddingLeft: 40
    }
});