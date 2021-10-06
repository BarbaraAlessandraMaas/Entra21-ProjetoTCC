import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, CheckBox} from 'react-native';

export function TelaLogin() {
    const [cpf, setCpf] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [selecionado, setSelection] = React.useState(false);
    
    return (
        <View style={styles.backwrapper}>
            <View style={styles.createAccount}>
                <Text style={styles.logoText}>EXUS</Text>
                <TextInput
                    placeholder='CPF'
                    onChangeText={setCpf}
                    style={styles.campoCPF}
                    value={cpf}
                    keyboardType="numeric"/>
                <TextInput
                    onChangeText={setSenha}
                    placeholder='SENHA'
                    value={senha}
                    style={styles.campoSenha}/>
                <CheckBox
                    value={selecionado}
                    onValueChange={setSelection}
                    style={styles.checkbox}/>
                <TouchableOpacity
                    style={styles.buttonEntrar}>
                    <Text style={styles.buttonTextEntrar}>ENTRAR</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.backwrappertext}>Não possui uma conta?</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Cadastre-se aqui</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    logoText: {
        width: 130,
        height: 62,
        left: 164,
        top: 89,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 48,
        lineHeight: 60,
        color: '#FFFFFF'
    },
    createAccount: {
        width: 360,
        height: 520,
        left: 0,
        top: 0,
        backgroundColor: '#183557',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    buttonText: {
        textDecorationLine: 'underline',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 21,
        textAlign: 'center'
    },
    button: {
        position: 'absolute',
        width: 184,
        height: 47,
        left: 87,
        top: 600,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 21,
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: '#6A6A6A'

    },
    buttonEntrar: {
        position: 'absolute',
        width: 80,
        height: 35,
        left: 140,
        top: 430,
        padding: 7,
        paddingLeft: 14,
        backgroundColor: '#36B8B8'
    },
    buttonTextEntrar: {
        color:'white'
    },
    backwrapper: {
        backgroundColor: 'white',
        flex: 1
    },
    backwrappertext: {
        position: 'absolute',
        width: 246,
        height: 37,
        left: 56,
        top: 570,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 21,
        textAlign: 'center',
        color: '#6A6A6A'
    },
    campoCPF: {
        position: 'absolute',
        width: 245,
        height: 34,
        left: 60,
        top: 250,
        backgroundColor: '#EAEAEA',
        alignContent: "center",
        padding: 7,
        fontSize: 18
    },
    campoSenha: {
        position: 'absolute',
        width: 245,
        height: 34,
        left: 60,
        top: 320,
        backgroundColor: '#EAEAEA',
        alignContent: "center",
        padding: 7,
        fontSize: 18
    },
    checkbox: {
        width: 25,
        height: 17,
        padding: 0,
        margin: 0,
        left: 90,
        top: 320,
        color:'white',
        backgroundColor: 'white'

    }
});