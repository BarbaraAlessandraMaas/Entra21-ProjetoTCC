import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function TelaDetalhes({ navigation }) {
    const plano = [
        {
            cd_plano: 1,
            ds_velocidade: "100 MEGA",
            vl_plano: "R$ 80,00",
            ds_plano: "Fibra Óptica, Wi-fi"
        },
        {
            cd_plano: 2,
            ds_velocidade: "200 MEGA",
            vl_plano: "R$ 120,00",
            ds_plano: "Fibra Óptica, Wi-fi"
        },
        {
            cd_plano: 4,
            ds_velocidade: "250 MEGA",
            vl_plano: "R$ 150,00",
            ds_plano: "Fibra Óptica, Wi-fi"
        },
        {
            cd_plano: 5,
            ds_velocidade: "500 MEGA",
            vl_plano: "R$ 240,00",
            ds_plano: "Fibra Óptica, Wi-fi"
        }
    ]

    const pagamento = [
        {
            cd_pagamento: 1,
            ds_status: "Em aberto",
            dt_vencimento: "Setembro 2021",
            vl_pagamento: plano[0].vl_plano
        },
        {
            cd_pagamento: 2,
            ds_status: "Atrasado",
            dt_vencimento: "Agosto 2021",
            vl_pagamento: plano[0].vl_plano
        },
        {
            cd_pagamento: 3,
            ds_status: "Pago",
            dt_vencimento: "Julho 2021",
            vl_pagamento: plano[0].vl_plano
        },
        {
            cd_pagamento: 4,
            ds_status: "Pago",
            dt_vencimento: "Junho 2021",
            vl_pagamento: plano[0].vl_plano
        },
        {
            cd_pagamento: 5,
            ds_status: "Pago",
            dt_vencimento: "Maio 2021",
            vl_pagamento: plano[0].vl_plano
        }
    ]

    return (
        <View style={styles.container}>
            <View style={styles.topContent}>
                <Text style={styles.textTitle}>{plano[0].ds_velocidade}</Text>
                <Text style={styles.textDescription}>{plano[0].ds_plano}</Text>
            </View>

            <View style={styles.middleContent}>
                <Text style={styles.textTop}>Valor:</Text>
                <Text style={styles.text}>{plano[0].vl_plano}</Text>
                <Text style={styles.textTop}>Data de Vencimento:</Text>
                <Text style={styles.text}>{pagamento[4].dt_vencimento}</Text>
                <Text style={styles.textTop}>Status:</Text>
                <Text style={styles.text}>{pagamento[4].ds_status}</Text>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Compartilhar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
    },
    topContent: {
        alignSelf: "flex-start",
        marginLeft: 50,
        marginBottom: 30
    },
    textTitle: {
        fontSize: 30,
        marginBottom: 15,
        color: "#333333"
    },
    textDescription: {
        fontSize: 14,
        color: "#333333"
    },
    middleContent: {
        height: 350,
        borderColor: "#EAEAEA",
        borderWidth: 1,
        marginHorizontal: 50,
        width: 280,
        justifyContent: "center",
        paddingTop: 20
    },
    textTop: {
        fontSize: 18,
        marginHorizontal: 30,
        color: "#333333"
    },
    text: {
        fontSize: 30,
        marginHorizontal: 30,
        marginTop: 5,
        color: "#333333",
        marginBottom: 30
    },
    button: {
        backgroundColor: "#36B8B8",
        paddingHorizontal: 20,
        marginVertical: 50,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        color: "white"
    }
});