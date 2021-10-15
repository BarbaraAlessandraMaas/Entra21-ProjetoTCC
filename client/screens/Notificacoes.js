import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { OptionsBar } from '../components/OptionsBar';

const DadosNotificacoes = [
    { id: 81239, assunto: "Novidades", descricao: "Há novidades em nossos serviços. Venha conferir!", date: "14/2" },
    { id: 239, assunto: "Atualizações", descricao: "A velocidade dos planos aumentou. Troque já o seu.", date: "10/2" },
    { id: 9879, assunto: "Suporte", descricao: "Problemas de internet? Nosso suporte está pronto pra te ajudar.", date: "9/20" },
    { id: 455, assunto: "Promoções", descricao: "Há planos em promoção. Aproveite a oportunidade.", date: "3/20" },
    { id: 81284839, assunto: "Novidades", descricao: "Há novidades em nossos serviços. Venha conferir!", date: "14/2" },
    { id: 239489, assunto: "Atualizações", descricao: "A velocidade dos planos aumentou. Troque já o seu.", date: "10/2" },
    { id: 9879854, assunto: "Suporte", descricao: "Problemas de internet? Nosso suporte está pronto pra te ajudar.", date: "9/20" },
    { id: 44848, assunto: "Promoções", descricao: "Há planos em promoção. Aproveite a oportunidade.", date: "3/20" }
]


export function Notificacoes({ navigation }) {
    return (
        <View>
            <OptionsBar nome="Notificações" />
            <View style={styles.scroll}>
                <FlatList
                    data={DadosNotificacoes}
                    renderItem={MostrarNotificacoes}
                    keyExtractor={(item) => "" + item.id}
                    style={{ marginBottom: 80 }}
                />
            </View>
        </View>
    );
}
const MostrarNotificacoes = ({ item }) => {
    return (
        <View style={styles.cards}>
            <View>
                <Text style={styles.titulo}>{item.assunto}</Text>
            </View>
            <View style={styles.description}>
                <Text style={styles.valorCards}>{item.descricao}</Text>
                <Text style={styles.valorDate}>{item.date}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    scroll: {
        marginTop: 15,
        marginBottom: 85
    },
    cards: {
        marginHorizontal: 15,
        marginTop: 10,
        backgroundColor: "white",
        borderTopLeftRadius: 10
    },
    titulo: {
        fontSize: 18,
        color: "white",
        backgroundColor: "#36B8B8",
        paddingLeft: 20,
        borderTopLeftRadius: 10,
        paddingVertical: 3
    },
    description: {
        paddingRight: 10
    },
    valorCards: {
        marginLeft: 15,
        marginTop: 3,
        fontSize: 14
    },
    date: {
        textAlign: "left"
    },
    valorDate: {
        textAlign: "right",
        display: "flex",
        justifyContent: "flex-end",
        paddingRight: 3,
        paddingBottom: 3
    }

})