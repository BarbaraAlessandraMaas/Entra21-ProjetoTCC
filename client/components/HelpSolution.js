import React from "react";
import { Text, StyleSheet } from "react-native";

export function HelpSolution(props) {
    return (
        <Text style={styles.textInformation}>{props.text}</Text>
    );
}

const styles = StyleSheet.create({
    textInformation: {
        fontSize: 18,
        textAlign: "justify"
    }
});