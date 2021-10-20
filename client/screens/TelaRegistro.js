import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Text, ScrollView } from "react-native"
import { ArrowBack } from "../components/ArrowBack";
import { Ionicons } from "@expo/vector-icons";
import { handleCpfChange } from "../utils/commonValidations";
import { TelaLoading } from "../components/TelaLoading";
import MaskInput, { Masks } from "react-native-mask-input";

export const initialState = {
    name: "",
    isNameValid: false,
    cpf: "",
    isCpfValid: false,
    phoneNumber: "",
    isPhoneNumberValid: false,
    isRegisterNextStep: false,
    email: "",
    isEmailValid: false,
    password: "",
    isPasswordValid: false,
    confirmPassword: "",
    isConfirmPasswordValid: false,
    logradouro: "",
    bairro: "",
    municipio: "",
    complemento: "",
    isRegisterValid: false,
    isLoading: false
};

export function TelaRegistro({ navigation }) {
    console.log(navigation)
    const [state, setState] = useState(initialState);

    useEffect(() => {
        const validations = [
            state.isNameValid,
            state.isCpfValid,
            state.isPhoneNumberValid
        ];

        const isRegisterNextStep = validations.reduce((previousValue, currentValue) => previousValue && currentValue);

        setState(prevState => ({
            ...prevState,
            isRegisterNextStep: isRegisterNextStep
        }));
    }, [state.isNameValid, state.isCpfValid, state.isPhoneNumberValid]);

    function handleNameChange(text) {
        if (text.trim().length >= 2) {
            setState(prevState => ({
                ...prevState,
                name: text,
                isNameValid: true
            }));
        } else {
            setState(prevState => ({
                ...prevState,
                name: text,
                isNameValid: false
            }));
        }
    }

    function handlePhoneNumberChange(text) {
        if (text.trim() <= 11) {
            setState(prevState => ({
                ...prevState,
                phoneNumber: text,
                isPhoneNumberValid: true
            }));
        } else {
            setState(prevState => ({
                ...prevState,
                phoneNumber: text,
                isPhoneNumberValid: false
            }));
        }
    }

    return (
        <View style={styles.container}>
            <TelaLoading isVisible={state.isLoading} />
            <View style={styles.content}>
                <ArrowBack text="REGISTRO" />

                <ScrollView style={styles.form}>
                    <TextInput
                        onChangeText={text => handleNameChange(text)}
                        isValid={state.isNameValid}
                        value={state.name}
                        placeholder="NOME"
                        style={styles.inputTop}
                    />

                    <MaskInput
                        mask={Masks.BRL_CPF}
                        onChangeText={text => handleCpfChange(text, setState)}
                        isValid={state.isCpfValid}
                        value={state.cpf}
                        placeholder="CPF"
                        style={styles.input}
                        keyboardType="numeric"
                    />

                    <MaskInput
                        mask={Masks.BRL_PHONE}
                        onChangeText={text => handlePhoneNumberChange(text)}
                        isValid={state.isPhoneNumberValid}
                        value={state.phoneNumber}
                        placeholder="CELULAR"
                        style={styles.input}
                        keyboardType="phone-pad"
                    />

                    <TouchableOpacity style={styles.buttonInput} onPress={() => navigation.navigate("TelaEndereco")}>
                        <Text style={styles.textButtonInput}>ENDEREÇO</Text>
                        <Ionicons name="chevron-forward" size={24} color="#757575" />
                    </TouchableOpacity>
                </ScrollView>

                <View style={{ marginBottom: 50 }}>
                    <TouchableOpacity style={styles.buttonNext} onPress={() => navigation.navigate("TelaConfirmarRegistro")}>
                        <Text style={styles.textButtonNext}>Próximo</Text>
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
        height: "100%",
        backgroundColor: "#EAEAEA"
    },
    form: {
        flex: 1,
        marginHorizontal: 40,
        marginTop: 80,
        paddingBottom: 150
    },
    inputTop: {
        height: 55,
        fontSize: 18,
        paddingLeft: 15,
        backgroundColor: "white"
    },
    input: {
        height: 55,
        fontSize: 18,
        paddingLeft: 15,
        backgroundColor: "white",
        marginTop: 40
    },
    buttonInput: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        height: 55,
        alignItems: "center",
        borderRadius: 5,
        marginTop: 40
    },
    textButtonInput: {
        fontSize: 18,
        color: "#757575"
    },
    buttonNext: {
        backgroundColor: "#36B8B8",
        paddingHorizontal: 20,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 90,
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 3
    },
    textButtonNext: {
        fontSize: 18,
        color: "white"
    }
});