import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, TouchableOpacity,  } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Options } from '../components/Drawer';
import { ButtonOptions } from '../components/ButtonOptions';

const user = {
    name: 'Rogerinho'
}
const planos = [
    { id: 1, title: '500 Megas' , valor: 'R$ 119,00' },
    { id: 2, title: '1000 Megas' , valor: 'R$ 219,00' },
    { id: 3, title: '2000 Megas' , valor: 'R$ 319,00' },
    { id: 4, title: '1500 Megas' , valor: 'R$ 619,00' },
    { id: 5, title: '100 Megas' , valor: 'R$ 50,00' },
    { id: 6, title: '500 Megas' , valor: 'R$ 119,00' },
    { id: 7, title: '500 Megas' , valor: 'R$ 119,00' }
]


const mostrarPlanos = ({ item }) => {
    return (
    <View style={styles.cards}>
        <Text style={styles.tituloCards}>{item.title}</Text>
        <Text style={styles.valorCards}>{item.valor}</Text>
        <TouchableOpacity style={styles.botao}>
            <Text style={styles.butaotext}>Saber mais</Text>
            <AntDesign name="rightcircle" size={25} color={'grey'}/>
        </TouchableOpacity>
    </View>
    );
}
export function TelaInicio({ navigation }) { 
    return (
        <View>
            <View style={styles.cabecalho}>
                <StatusBar
                    animated={true}
                    backgroundColor='#183557'
                />
                <ButtonOptions/>
            </View>
            <View style={styles.containerDestaques}>
                <Text style={styles.titulo}>Confira os destaques</Text>
                <FlatList
                data={planos}
                renderItem={mostrarPlanos}
                keyExtractor={(item) => ""+item.id}
                horizontal
                style={styles.lista}
                />
            </View>
            <View style={styles.containerAllPlans }>
                <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Planos")
                }}
                style={styles.link}
                > 
                <Text style={styles.botaoText}>Veja os planos disponíveis aqui</Text>
            </TouchableOpacity>
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
        height: 370,
        marginTop: 50,
        paddingTop: 20,
        justifyContent: 'center'
    },
    cards: {
        margin: 20,
        width: 210,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 7,
        padding: 30,
        height: 250
    },
    titulo:{
        fontSize: 25,
        textAlign: 'center',
        color: 'white'
    },
    tituloCards: {
        fontSize: 26,
        color: 'grey',
        marginBottom: 8,
    },
    valorCards: {
        fontSize: 23,
        color: 'grey',
    },
    botao: {
        marginTop: 30,
        backgroundColor: '#EAEAEA',
        height: 43,
        width: 95,
        padding: 10,
        borderRadius: 15,
        textAlign: 'center',
    },
    botaoText:{
        fontSize: 15,
    },
    containerAllPlans:{
        textAlign: 'center',
        justifyContent: "center",
        alignItems: 'center',
        height: 200
    },
  
    linkText:{
        textAlign:'center',
        fontSize: 17
    }
})