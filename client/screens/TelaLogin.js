import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function TelaLogin() {
    return (
        <View style={styles.backwrapper}>
            <View style={styles.createAccount}><Text style={styles.logoText}>EXUS</Text>
            </View>
            <Text style={styles.backwrappertext}>Não possui uma conta?</Text>
            <TouchableOpacity style={styles.buttonRegister}>
                <Text style={styles.buttonText}>Cadastre-se aqui</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    logoText: {
        position: 'absolute',
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
        position: 'absolute',
        width: 360,
        height: 484,
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
    backwrapper: {
        backgroundColor: 'white'
    },
    backwrappertext: {
        position: 'absolute',
        width: 246,
        height: 37,
        left: 56,
        top: 529,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 21,
        textAlign: 'center',
        color: '#6A6A6A'
    },
    button: {
        position: 'absolute',
        width: 184,
        height: 47,
        left: 87,
        top: 556,
        font-family: Antic Slab;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        text-decoration-line: underline;
        color: #6A6A6A;

    }


});