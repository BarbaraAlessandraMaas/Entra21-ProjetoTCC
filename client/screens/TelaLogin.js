import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, StatusBar, KeyboardAvoidingView } from 'react-native';
import { Checkbox } from '../components/Checkbox';

export function TelaLogin() {
    const [cpf, setCpf] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [selecionado, setSelecionado] = React.useState(false);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            {/* <Image source={require("")} style={styles.logo /> */}
            <View style={styles.container}>
                <View style={styles.loginView}>
                    <Text style={styles.logoText}>EXUS</Text>
                    <View style={styles.form}>
                        <TextInput
                            placeholder='CPF'
                            onChangeText={setCpf} 
                            style={styles.inputCpf}
                            value={cpf}
                            keyboardType="numeric" />
                        <TextInput
                            onChangeText={setSenha}
                            placeholder='SENHA'
                            value={senha}
                            style={styles.inputSenha} />
                        <Checkbox
                            checked={selecionado}
                            onPress={() => setSelecionado(prevSelecionado => !prevSelecionado)}
                            message="Mantenha-se conectado"
                            style={styles.checkbox} />
                        <TouchableOpacity
                            style={styles.buttonEntrar}>
                            <Text style={styles.textEntrar}>ENTRAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.cadastroView}>
                    <Text style={styles.textCadastro}>Não possui uma conta?</Text>
                    <TouchableOpacity>
                        <Text style={styles.buttonCadastro}>Cadastre-se aqui</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {

    },
    logoText: {
        fontSize: 48,
        color: '#FFFFFF',
        alignSelf: "flex-end",
        paddingTop: StatusBar.currentHeight,
        marginBottom: 50
    },
    form: {
        flex: 1,
        justifyContent: "center"
    },
    loginView: {
        flex: 7,
        backgroundColor: '#183557',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingVertical: 40,
        paddingHorizontal: 50
    },
    inputCpf: {
        height: 37,
        backgroundColor: '#EAEAEA',
        paddingLeft: 10,
        fontSize: 18,
        marginBottom: 30
    },
    inputSenha: {
        height: 37,
        backgroundColor: '#EAEAEA',
        paddingLeft: 10,
        fontSize: 18,
        marginBottom: 30
    },
    buttonEntrar: {
        width: 120,
        paddingVertical: 10,
        backgroundColor: '#36B8B8',
        textAlign: 'center',
        alignSelf: "center"
    },
    textEntrar: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    },
    cadastroView: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textCadastro: {
        fontSize: 18,
        color: '#6A6A6A',
        alignItems: 'center'
    },
    buttonCadastro: {
        textDecorationLine: 'underline',
        fontSize: 18,
        marginTop: 10
    }
});