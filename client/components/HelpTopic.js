import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export function HelpTopic(props) {
    return (
        <View style={styles.container}>
            <View style={styles.topic}>
                <Text style={styles.topicText}>{props.text}</Text>
                <Ionicons name="chevron-forward-outline" size={27} color="black" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: "#EAEAEA"
    },
    topic: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 30
    },
    topicText: {
        marginRight: 10,
        fontSize: 14
    }
});