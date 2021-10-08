import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, StatusBar, FlatList } from 'react-native';
import { ButtonOptions } from '../components/ButtonOptions';

const user = {
    name: 'Rogerinho'
}
const planos = [
    {
      id: '123123123123123',
      title: '500 megas',
      valor: 'R$ 119,00'
    },
]
const Item = ({ title, valor }) => (
    <View>
        <Text>{title, valor}</Text>
    </View>
)

export function TelaInicial( ) {
    const mostrarPlanos = ({ item }) => {
        <Item title={item.title}/>
    }
    
    return (
        <View>
            <View style={styles.header}>
                <ButtonOptions/>
                <View>
                <Text style={styles.headerText}>Bem vindo,</Text>
                <Text style={styles.username}>{user.name}</Text>
                </View>
                <StatusBar
                    animated={true}
                    backgroundColor='#183557'
                />
            </View>
            <View style={styles.containerDestaques}>
                <FlatList
                    data={planos}
                    renderItem={mostrarPlanos}
                    keyExtractor = {item.id}
                    horizontal
                    style={styles.lista}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: 'auto',
        height: 70,
        backgroundColor: '#183557',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: 11
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        marginLeft: 40
    },
    username:{
        fontSize: 15,
        marginLeft: 40,
        color: 'white'
    },
    containerDestaques: {
        backgroundColor:'#36B8B8',
        width:'auto',
        height: 400,
        marginTop: 50
    },
    lista:{
        width: 'auto',
        height: 100
    }
})