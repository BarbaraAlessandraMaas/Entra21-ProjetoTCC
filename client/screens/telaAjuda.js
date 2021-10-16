import React from "react";
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ArrowBack } from "../components/ArrowBack";
import { HelpTopic } from "../components/HelpTopic";

export function TelaAjuda() {
    return (
        <View style={styles.container}>
            <ArrowBack text="AJUDA" />

            <View style={styles.content}>
                <Text style={styles.helpText}>Explore alguns de nossos tópicos para obter ajuda</Text>
                
                <ScrollView>
                    <TouchableOpacity><HelpTopic text="aaaaaaaaaaaaaaaaaa" /></TouchableOpacity>
                    <TouchableOpacity><HelpTopic text="aaaaaaaaaaaaaaaaaa" /></TouchableOpacity>
                    <TouchableOpacity><HelpTopic text="aaaaaaaaaaaaaaaaaa" /></TouchableOpacity>
                    <TouchableOpacity><HelpTopic text="aaaaaaaaaaaaaaaaaa" /></TouchableOpacity>
                    <TouchableOpacity><HelpTopic text="aaaaaaaaaaaaaaaaaa" /></TouchableOpacity>
                    <TouchableOpacity><HelpTopic text="aaaaaaaaaaaaaaaaaa" /></TouchableOpacity>
                    <TouchableOpacity><HelpTopic text="aaaaaaaaaaaaaaaaaa" /></TouchableOpacity>
                    <TouchableOpacity><HelpTopic text="aaaaaaaaaaaaaaaaaa" /></TouchableOpacity>
                    <TouchableOpacity><HelpTopic text="aaaaaaaaaaaaaaaaaa" /></TouchableOpacity>
                    <TouchableOpacity><HelpTopic text="aaaaaaaaaaaaaaaaaa" /></TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        marginBottom: 30
    },
    helpText: {
        textAlign: "center",
        fontSize: 18,
        marginHorizontal: 30,
        marginBottom: 30
    }
});