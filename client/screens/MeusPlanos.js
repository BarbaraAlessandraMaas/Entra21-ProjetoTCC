import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { OptionsBar } from '../components/OptionsBar';

const numeroPlanos = 1
const planos_user = [
    {velocidade_internet: "500 MEGA", },    
]

function MostrarPlanos () {
    if (numeroPlanos === 0) {
        return (
            <View>
                <Text>Você não possui planos</Text>
            </View>
        )
    } else if (numeroPlanos === 1) {
        return (
            <View style={styles.card}>
                <Text>{planos_user.velocidade_internet}</Text>
            </View>
        )
    }
}

export function MeusPlanos({ navigation }) {
    return (
        <View>
            <OptionsBar nome="Meus Planos"/>
            <Text>Meus Planos</Text>
            <MostrarPlanos/>
            <View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    card: {
        
    }
})