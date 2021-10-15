import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { OptionsBar } from '../components/OptionsBar';

export const user = {
    name: 'Rogerinho',
    email: 'ondequevolta@gmail.com'
}

const planos = [
    { id: 1, title: '500 MEGA', vl_plano: 'R$ 119,00' },
    { id: 2, title: '1000 MEGA', vl_plano: 'R$ 219,00' },
    { id: 3, title: '2000 MEGA', vl_plano: 'R$ 319,00' },
    { id: 4, title: '1500 MEGA', vl_plano: 'R$ 619,00' },
    { id: 5, title: '100 MEGA', vl_plano: 'R$ 50,00' },
    { id: 6, title: '500 MEGA', vl_plano: 'R$ 119,00' },
    { id: 7, title: '500 MEGA', vl_plano: 'R$ 119,00' }
]


const mostrarPlanos = ({ item }) => {
    return (
        <View style={styles.cards}>
            <Text style={styles.tituloCards}>{item.title}</Text>
            <Text style={styles.valorCards}>{item.vl_plano}</Text>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.butaotext}>Saber mais</Text>
                <AntDesign name="rightcircle" size={25} color={'grey'} />
            </TouchableOpacity>
        </View>
    );
}
export function TelaInicio({ navigation }) {
    return (
        <View style={styles.container}>
            <OptionsBar nome={"Bem vindo,"} dados={user.name} />

            <View style={styles.content}>
                <View style={styles.containerDestaques}>
                    <Text style={styles.titulo}>Confira os Destaques</Text>
                    <FlatList
                        data={planos}
                        renderItem={mostrarPlanos}
                        keyExtractor={(item) => "" + item.id}
                        horizontal
                        style={styles.lista}
                    />
                </View>
                <View style={styles.containerAllPlans}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Meus Planos")
                        }}
                        style={styles.link}
                    >
                        <Text style={styles.botaoText}>Veja todo os planos{"\n"}disponíveis aqui</Text>
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
        marginTop: -70
    },
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
    username: {
        fontSize: 15,
        marginLeft: 40,
        color: 'white'
    },
    containerDestaques: {
        backgroundColor: '#36B8B8',
        width: 'auto',
        height: 390,
        marginTop: 40,
        paddingTop: 20,
        justifyContent: 'center'
    },
    cards: {
        margin: 20,
        width: 210,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 5,
        padding: 30,
        height: 250
    },
    titulo: {
        fontSize: 24,
        textAlign: "center",
        color: "white"
    },
    tituloCards: {
        fontSize: 26,
        color: "#3a3a3a",
        marginBottom: 8,
    },
    valorCards: {
        fontSize: 24,
        color: "#3a3a3a"
    },
    botao: {
        marginTop: 30,
        backgroundColor: "#EAEAEA",
        height: 43,
        width: 95,
        padding: 10,
        borderRadius: 5,
        textAlign: 'center',
    },
    botaoText: {
        fontSize: 18,
        color: "#3a3a3a",
        textDecorationLine: "underline",
        textAlign: "center"
    },
    containerAllPlans: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 18
    },
    linkText: {
        fontSize: 18
    },
    link: {
        textAlign: 'center',
        justifyContent: "center",
        marginTop: 25,
        alignItems: "center"
    }
})