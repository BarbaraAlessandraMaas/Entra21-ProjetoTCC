import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { OptionBar } from "./OptionBar";

export const plano = [
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
    },
    {
        cd_pagamento: 5,
        ds_status: "Pago",
        dt_vencimento: "Maio 2021",
        vl_pagamento: plano[0].vl_plano
    },
    {
        cd_pagamento: 5,
        ds_status: "Pago",
        dt_vencimento: "Maio 2021",
        vl_pagamento: plano[0].vl_plano
    },
    {
        cd_pagamento: 5,
        ds_status: "Pago",
        dt_vencimento: "Maio 2021",
        vl_pagamento: plano[0].vl_plano
    }
]

export function OnePlan() {
    const mostrarPlano = ({ item }) => {
        const StatusColor = () => {
            if (item.ds_status === "Pago") {
                return <Text style={{ color: "#43BA38", fontSize: 14 }}>{item.ds_status}</Text>
            } else if (item.ds_status === "Em aberto") {
                return <Text style={{ color: "#DBC63D" }}>{item.ds_status}</Text>
            } else {
                return <Text style={{ color: "#C41B1B" }}>{item.ds_status}</Text>
            }
        }

        return (
            <View style={styles.card}>
                <View>
                    <Text style={styles.textPayment}>{item.vl_pagamento}</Text>
                    <Text style={styles.textContent}>{item.dt_vencimento}</Text>
                </View>

                <View>
                    <Text style={[styles.textContent, { paddingVertical: 5 }]}>Status:</Text>
                    <StatusColor />
                </View>

                <TouchableOpacity style={styles.buttonDetails}>
                    <Text style={{ color: "#333333" }}>Detalhes</Text>
                    <Ionicons name="chevron-forward" size={24} color="#333333" />
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <OptionBar nome="Meus Planos" />

            <View style={styles.plans}>
                <View style={styles.headerOnePlan}>
                    <Text style={styles.velocity}>{plano[0].ds_velocidade}</Text>
                    <Text style={styles.description}>{plano[0].ds_plano}</Text>
                </View>

                <FlatList
                    data={plano, pagamento}
                    renderItem={mostrarPlano}
                    keyExtractor={(item) => "" + item.cd_pagamento}
                    style={{ marginBottom: 30 }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    plans: {
        height: "100%",
        justifyContent: "center",
        marginTop: 20,
        marginHorizontal: 15
    },

    // Style one plan
    headerOnePlan: {
        backgroundColor: "#36B8B8",
        height: 200,
        justifyContent: "center",
        paddingLeft: 30,
        borderTopLeftRadius: 15
    },
    velocity: {
        color: "white",
        fontSize: 35,
        marginBottom: 20
    },
    description: {
        color: "white",
        fontSize: 18,
        marginTop: 10
    },
    card: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#EAEAEA"
    },
    textPayment: {
        fontSize: 18,
        color: "#333333",
        paddingVertical: 5
    },
    textContent: {
        fontSize: 14,
        color: "#333333"
    },
    buttonDetails: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 5
    }
});