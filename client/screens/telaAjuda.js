import React from "react";
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ArrowBack } from "../components/ArrowBack";
import { HelpTopic } from "../components/HelpTopic";

export function TelaAjuda({ navigation }) {
    return (
        <View style={styles.container}>
            <ArrowBack text="AJUDA" />

            <View style={styles.content}>
                <Text style={styles.helpText}>Explore alguns de nossos tópicos para obter ajuda</Text>
                
                <ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate("TelaTopico")}><HelpTopic text="Verificar se há má conexão pelo computador" /></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("TelaTopico1")}><HelpTopic text="Problemas com o modem DSL" /></TouchableOpacity>
                    <TouchableOpacity><HelpTopic text="Como saber se é o site que está fora do ar" /></TouchableOpacity>
                    <TouchableOpacity><HelpTopic text="Problemas rede com fios" /></TouchableOpacity>
                    <TouchableOpacity><HelpTopic text="Um dispositivo não está se conectando" /></TouchableOpacity>
                    <TouchableOpacity><HelpTopic text="Alternativa final" /></TouchableOpacity>
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