import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { OptionsBar } from '../components/OptionsBar';

export function MeusPlanos({ navigation }) {
    const numeroPlanos = 1
    const planos_user = [
        { velocidade_internet: "500 MEGA", },
    ]

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
                    <Text style={styles.textOnePlan}>{planos_user.velocidade_internet}</Text>
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
        marginHorizontal: 30
    },
    textNoPlans: {
        fontSize: 18,
        textAlign: "center",
        paddingBottom: 100
    }
})