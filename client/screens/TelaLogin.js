import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { Checkbox } from "../components/Checkbox";
import { useAuth } from "../contexts/AuthContext";
import { TelaLoading } from "../components/TelaLoading";
import { showErrorMessage } from "../utils/errorHandlers";
import { handleCpfChange, handlePasswordChange } from "../utils/commonValidations";

const initialState = {
    cpf: "",
    isCpfValid: false,
    password: "",
    isPasswordValid: false,
    isLoginValid: false,
    isLoading: false,
}

export function TelaLogin({ navigation }) {
    const [selecionado, setSelecionado] = useState(false);
    const { memoContext } = useAuth();
    const [state, setState] = useState(initialState);

    useEffect(() => {
        setState(prevState => ({
            ...prevState,
            isLoginValid: prevState.isCpfValid && prevState.isPasswordValid
        }));
    }, [state.isCpfValid, state.isPasswordValid]);

    async function handleSignIn() {
        setState(prevState => ({ ...prevState, isLoading: true }));
        try {
            await memoContext.signIn(state.email, state.password);
        } catch (err) {
            setState(prevState => ({
                ...prevState,
                isLoading: false,
                emailError: true,
                passwordError: true
            }));
            showErrorMessage(err);
        }
    }

    function handleNavigateSignUpScreen() {
        setState(initialState);
        navigation.push("TelaCadastro");
    }

    useFonts({ "Roboto": require("../assets/Roboto-Regular.ttf") });

    return (
        <View style={styles.container}>
            <TelaLoading isVisible={state.isLoading} />
            <StatusBar color="white" backgroundColor="#183557" />

            <View style={styles.loginView}>
                <View style={styles.logo}>
                    <Image source={require("../assets/logo.png")} style={styles.image} />
                    <Text style={styles.logoText}>EXUS</Text>
                </View>

                <View style={styles.form}>
                    <TextInput
                        placeholder="CPF"
                        onChangeText={text => handleCpfChange(text, setState)}
                        style={styles.input}
                        value={state.cpf}
                        keyboardType="numeric"
                        isValid={state.isCpfValid}
                    />
                    <TextInput
                        placeholder="SENHA"
                        onChangeText={text => handlePasswordChange(text, setState)}
                        value={state.password}
                        style={styles.input}
                        secureTextEntry={true}
                        isValid={state.isPasswordValid}
                    />
                    <Checkbox
                        checked={selecionado}
                        onPress={() => setSelecionado(prevSelecionado => !prevSelecionado)}
                        message="Mantenha-se conectado"
                    />
                    <TouchableOpacity style={styles.buttonEntrar} onPress={handleSignIn} disabled={!state.isLoginValid}>
                        <Text style={styles.textEntrar}>ENTRAR</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.cadastroView}>
                <Text style={styles.textCadastro}>Não possui uma conta?</Text>
                <TouchableOpacity>
                    <Text style={styles.textButtonCadastro} onPress={handleNavigateSignUpScreen}>Cadastre-se aqui</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
        marginBottom: 10
    },
    image: {
        width: 130,
        height: 130,
        marginBottom: 50
    },
    logoText: {
        fontFamily: "Roboto",
        fontSize: 48,
        color: "white",
        marginBottom: 50
    },
    form: {
        flex: 1,
        justifyContent: "center",
        marginTop: 90
    },
    loginView: {
        flex: 8,
        backgroundColor: "#183557",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingTop: 50,
        paddingBottom: 70,
        paddingHorizontal: 50
    },
    input: {
        fontFamily: "Roboto",
        height: 40,
        backgroundColor: "#EAEAEA",
        paddingLeft: 10,
        fontSize: 18,
        marginBottom: 30
    },
    buttonEntrar: {
        width: 120,
        paddingVertical: 10,
        backgroundColor: "#36B8B8",
        textAlign: "center",
        alignSelf: "center",
        marginBottom: 35
    },
    textEntrar: {
        fontFamily: "Roboto",
        color: "white",
        fontSize: 18,
        textAlign: "center"
    },
    cadastroView: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center"
    },
    textCadastro: {
        fontFamily: "Roboto",
        fontSize: 18,
        color: "#333333",
        alignItems: "center"
    },
    textButtonCadastro: {
        fontFamily: "Roboto",
        textDecorationLine: "underline",
        fontSize: 18,
        marginTop: 10,
        color: "#333333"
    }
});