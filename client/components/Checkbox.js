import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";

export function Checkbox({ checked, onPress, message }) {

    useFonts({ "Roboto": require("../assets/Roboto-Regular.ttf") });

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={[styles.checkbox, checked ? { backgroundColor: "#36B8B8" } : {}]}>
                { checked && <Ionicons name="checkmark" size={24} color="white" /> }
            </View>
            <Text style={styles.message}>{message}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({ 
    container: {        
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30
    },
    checkbox: {
        height: 24,
        width: 24 ,
        backgroundColor: "white",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",        
    },
    message: {
        fontFamily: "Roboto",
        paddingLeft: 10,
        fontSize: 14,
        color: "white"
    }
});