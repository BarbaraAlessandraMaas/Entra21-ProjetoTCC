import React from "react";
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { OptionsBar } from '../components/OptionsBar';
import { user } from '../screens/TelaInicio';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';



export function MinhaConta({ navigation }) {
    return (
        <View style={styles.container}>
            <OptionsBar nome={user.name} dados={user.email} />
            <View style={styles.containericon}>
                <View style={styles.icon}>
                    <FontAwesome name="user-circle" size={60} color="#EAEAEA" />
                </View>
                <View>
                    <Text style={styles.title}>Sua Conta</Text>
                </View>
            </View>
            <View style={styles.containerDados}>
                <View style={styles.textArea}>
                <Text style={styles.text}>Informações de perfil:</Text>
                </View>
                <ScrollView style={styles.informationsArea}>
                </ScrollView>
                <TouchableOpacity >
                    <Text style={styles.botaoText}>Alterar Dados</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}


const styles = StyleSheet.create({
    
    container:{
        justifyContent:"center",
        backgroundColor:"white",
        display: "flex"
    },

    containerDados:{
        display: "flex",
        backgroundColor:"#EAEAEA",
        margin: 20,
        marginTop: 0,
        height: 400,
    },

    containericon:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: 20,
        marginBottom: 0,
        backgroundColor: "#36B8B8",
        borderTopLeftRadius: 15
    },
    textArea: {
        paddingLeft: 45,
        paddingTop: 20
    },
    icon: {
        padding: 20,
    },
    title: {
        marginLeft: 10,
        fontSize: 18,
        color: "#EAEAEA"
    },
    text: {
        color:"#3a3a3a",
        fontSize: 15
    },
    informationsArea: {
        margin: 30,
        marginTop: 20,
        marginBottom: 40,
        backgroundColor:"white",
        borderRadius: 5
    },
    botaoText:{
        textAlign:"center",
        backgroundColor: "#36B8B8",
        height: 40,
        color:"#EAEAEA",
        fontSize: 16,
        padding: 9
    },
}) 

