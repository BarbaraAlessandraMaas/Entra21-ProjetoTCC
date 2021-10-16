import React from "react";
import { StyleSheet, View, Text } from "react-native";

export function ChatMessage(props) {
    return (
        <View style={[styles.container, props.self ? { alignSelf: "flex-end" } : { alignSelf: "flex-start" }]}>
            <Text style={styles.textMessage}>{props.message}</Text>
            <Text style={styles.dateMessage}>{props.date}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        marginHorizontal: 10,
        borderRadius: 5,
        maxWidth: 250,
        marginBottom: 10
    },
    textMessage: {
        paddingLeft: 10,
        paddingRight: 20,
        paddingTop: 5,
        fontSize: 14
    },
    dateMessage: {
        fontSize: 10,
        textAlign: "right",
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 7,
        color: "#36B8B8"
    }
});