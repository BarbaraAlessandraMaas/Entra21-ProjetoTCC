import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { OptionBar } from "../components/OptionBar";
import { OnePlan } from "../components/OnePlan";

export function MeusPlanos({ navigation }) {
    const numeroPlanos = 1

    if (numeroPlanos === 0) {
        return (
            <View style={styles.container}>
                <OptionBar nome="Meus Planos" />

                <View style={styles.plans}>
                    <Text style={styles.textNoPlans}>Você ainda não possui planos!</Text>
                    <Text style={styles.textNoPlans}>Acesse a tela inicial para visualizar todos os planos disponíveis na sua região.</Text>
                </View>
            </View>
        )
    } else if (numeroPlanos === 1) {
        return <OnePlan />;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    plans: {
        height: "100%",
        justifyContent: "center",
        margin: 20
    },

    // Style no plans
    textNoPlans: {
        fontSize: 18,
        textAlign: "center",
        paddingBottom: 100
    }
});