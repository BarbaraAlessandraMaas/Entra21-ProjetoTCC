import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function DadosCliente(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.textDados}>Nome de Usuário:</Text>
            <Text style={styles.textContent}>{props.name}</Text>

            <Text style={styles.textDados}>E-mail:</Text>
            <Text style={styles.textContent}>{props.email}</Text>

            <Text style={styles.textDados}>CPF:</Text>
            <Text style={styles.textContent}>{props.cpf}</Text>

            <Text style={styles.textDados}>Telefone:</Text>
            <Text style={styles.textContent}>{props.telefone}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20
    },
    textDados: {
        fontSize: 16,
        paddingHorizontal: 20,
        paddingTop: 15
    },
    textContent: {
        fontSize: 14,
        paddingHorizontal: 20,
        borderWidth: 0.5,
        borderColor: "#919191",
        borderRadius: 3,
        marginHorizontal: 20,
        marginTop: 10,
        padding: 5
    }
});