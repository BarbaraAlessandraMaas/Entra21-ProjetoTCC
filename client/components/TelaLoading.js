import React from "react";
import { StyleSheet, View, StatusBar, ActivityIndicator, Image, Text } from "react-native";

export function TelaLoading() {
    return (
        <View style={styles.container}>
            <StatusBar color="white" backgroundColor="#183557" />

            <Image source={require("../assets/logo.png")} style={styles.image} />
            <Text style={styles.textImage}>EXUS</Text>
            
            <ActivityIndicator size="large" color={"white"} style={{ flex: 1 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#183557"
    },
    textImage: {
        color: "white",
        fontSize: 48,
        textAlign: "center",
        paddingTop: 30
    },
    image: {
        width: 120,
        height: 120,
        alignSelf: "center",
        marginTop: 130
    }
});