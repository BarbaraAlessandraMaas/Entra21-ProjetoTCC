import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export function Checkbox({ checked, onPress, message }) {    
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={[styles.checkbox, checked ? { backgroundColor: "#36B8B8" } : {}]}>
                {
                    checked && 
                    <FontAwesome name="check" size={22} color={checked ? "white" : "black"} />
                }
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
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",        
    },
    message: {
        fontFamily: 'Antic-Slab',
        paddingLeft: 10,
        fontSize: 15,
        color: "white"
    }
});