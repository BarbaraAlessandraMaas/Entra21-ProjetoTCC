import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { OptionsBar } from '../components/OptionsBar';
import { AntDesign } from '@expo/vector-icons';

export function MeusPlanos({ navigation }) {
    const numeroPlanos = 1
    const planos = [
        { id: 5000, vl_internet: "500 MEGA", },
    ]
    const planos_pagamentos = [
        { id: 1, planos_id: 5000, valor: "R$100", ds_status: "Atrasado", date: "Setembro 2021" },
        { id: 2, planos_id: 5000, valor: "R$200", ds_status: "Atrasado", date: "Agosto 2021" },
        { id: 3, planos_id: 3, valor: "R$300", ds_status: "Pago", date: "Julho 2021" },
        { id: 4, planos_id: 4, valor: "R$400", ds_status: "Pago", date: "Junho 2021" },
    ]


    const mostrarUmPlano = ({ item }) => {

        const StatusColor = () => {
            if (item.ds_status === "Pago") {
                return (
                    <Text style={styles.pago}>{item.ds_status}</Text>
                )
            } else {
                return (
                    <Text style={styles.atrasado}>{item.ds_status}</Text>
                )
            }
        }


        return (
            <View style={styles.card}>
                <View>
                    <Text>{item.valor}</Text>

                    <Text>{item.date}</Text>
                </View>
                <View styles={styles.status}>

                    <Text>Status:</Text><StatusColor />
                </View>
                
                <View>
                    <TouchableOpacity style={styles.botao}>
                    <Text>Detalhes</Text>
                        <AntDesign name="rightcircle" size={20} color={'grey'} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    if (numeroPlanos === 0) {
        return (
            <View style={styles.container}>
                <OptionsBar nome="Meus Planos" />
                <View style={styles.plans}>
                    <Text style={styles.textNoPlans}>Você ainda não possui planos!</Text>
                    <Text style={styles.textNoPlans}>Acesse a tela inicial para visualizar todos os planos disponíveis na sua região.</Text>
                </View>
            </View>
        )
    } else if (numeroPlanos === 1) {
        return (
            <View style={styles.container}>
                <OptionsBar nome="Meus Planos" />
                <View style={styles.plans}>
                    <View style={styles.vl}>
                        <Text style={styles.tituloCards}>{planos.vl_internet}500 MEGA</Text>
                    </View>
                    <FlatList
                        data={planos, planos_pagamentos}
                        renderItem={mostrarUmPlano}
                        keyExtractor={(item) => "" + item.id} />
                </View>
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <OptionsBar nome="Meus Planos" />
                <View style={styles.plans}>

                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({


    container: {
        flex: 1
    },
    plans: {
        height: "100%",
        justifyContent: "center",
        marginHorizontal: 30,
        margin: 20
    },


    //Possui um plano
    vl: {
        backgroundColor: "#36B8B8",
        height: 65,
        justifyContent: "center",
        paddingLeft: 20
    },
    card: {
        padding: 14,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },
    pago: {
        color: "green",
        fontSize: 15
    },
    atrasado: {
        color: "red",
        fontSize: 15
    },
    status: {
        display: 'flex',
        alignItems: 'baseline'
    },
    botao: {
        alignItems: "flex-end",
        backgroundColor: "#EAEAEA",
        padding: 5
    },

    //Não possui nenhum plano

    textNoPlans: {
        fontSize: 18,
        textAlign: "center",
        paddingBottom: 100
    }
})