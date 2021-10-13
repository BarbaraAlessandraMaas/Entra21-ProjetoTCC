import React, { useReducer } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { OptionsBar } from '../components/OptionsBar';
import { user } from '../screens/TelaInicio';
import { EvilIcons } from '@expo/vector-icons';



export function MinhaConta({ navigation }) {
    return (
        <View>
            <OptionsBar nome={user.name} dados={user.email} />
            <View style={styles.container}>
                <View style={styles.icon}>
                    <EvilIcons name="user" size={100} color="white" />
                </View>
                <View>
                    <Text style={styles.text}>Sua Conta</Text>
                </View>
            </View>
        </View>

    );
}


const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: 20,
        marginLeft: 40 
    },
    icon: {
        backgroundColor: "#36B8B8",
        borderRadius: 10000,
        paddingTop:10,
        paddingBottom: 10
    }
}) 

