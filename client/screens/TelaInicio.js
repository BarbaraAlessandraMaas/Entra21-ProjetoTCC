import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { OptionBar } from "../components/OptionBar";
import { plano } from "../components/OnePlan";

export const user = {
    cd_cliente: 1,
    ds_nome: "Teste",
    ds_email: "teste@email.com",
    ds_telefone: "(47) 98888-8888",
    nr_cpf: "111.111.111-11"
}

const mostrarPlanos = ({ item }) => {
    return (
        <View style={styles.cards}>
            <Text style={styles.tituloCards}>{item.ds_velocidade}</Text>
            <Text style={styles.valorCards}>{item.vl_plano}</Text>

            <TouchableOpacity style={styles.button}>
                <Text style={{ fontSize: 14 }}>Saiba mais</Text>

                <Ionicons name="chevron-forward" size={25} color="#333333" />
            </TouchableOpacity>
        </View>
    );
}
export function TelaInicio({ navigation }) {
    return (
        <View style={styles.container}>
            <OptionBar nome="Bem vindo," dados={user.ds_nome} navigation={navigation} />

            <View style={styles.content}>
                <View style={styles.containerDestaques}>
                    <Text style={styles.titulo}>Confira os Destaques</Text>

                    <FlatList
                        data={plano}
                        renderItem={mostrarPlanos}
                        keyExtractor={(item) => "" + item.cd_plano}
                        horizontal
                    />
                </View>

                <View style={styles.containerAllPlans}>
                    <TouchableOpacity onPress={() => navigation.navigate("TelaPlanos")}>
                        <Text style={styles.textButton}>Veja todo os planos{"\n"}disponíveis aqui</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        justifyContent: "center",
        height: "100%",
        marginTop: -50
    },
    containerDestaques: {
        backgroundColor: "#36B8B8",
        width: "auto",
        height: 420,
        paddingVertical: 20,
        justifyContent: "center"
    },
    titulo: {
        fontSize: 24,
        textAlign: "center",
        color: "white",
        paddingVertical: 10
    },
    containerAllPlans: {
        display: "flex",
        alignItems: "center",
        marginTop: 45
    },
    textButton: {
        fontSize: 18,
        color: "#333333",
        textDecorationLine: "underline",
        textAlign: "center",
        lineHeight: 25
    },
    cards: {
        marginLeft: 15,
        marginVertical: 20,
        width: 260,
        backgroundColor: "#EAEAEA",
        alignItems: "center",
        borderRadius: 5,
        height: 290,
        justifyContent: "center"
    },
    tituloCards: {
        fontSize: 30,
        color: "#333333",
        marginVertical: 10
    },
    valorCards: {
        fontSize: 24,
        color: "#333333"
    },
    button: {
        marginTop: 30,
        backgroundColor: "white",
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5,
        textAlign: "center",
        alignItems: "center"
    }
});