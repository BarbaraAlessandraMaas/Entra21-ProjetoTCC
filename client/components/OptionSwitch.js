import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

export function OptionSwitch(props) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.modalTitle}>{props.title}</Text>
                <Switch
                    trackColor={{ false: "#919191", true: "#36B8B8" }}
                    thumbColor={isEnabled ? "#EAEAEA" : "#EAEAEA"}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            <Text style={styles.modalDescription}>{props.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 50
    },
    content: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 15
    },
    modalTitle: {
        fontSize: 18,
        color: "#333333"
    },
    modalDescription: {
        fontSize: 14,
        color: "#333333",
        textAlign: "justify"
    }
});