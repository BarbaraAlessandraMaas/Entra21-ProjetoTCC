import React from "react";
import { Text, View, StyleSheet, TouchableOpacity} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { AbrirOptions } from "./Drawer";

export function ButtonOptions() {
    return (
    <TouchableOpacity onPress={AbrirOptions} style={styles.options}
        >
        <View>
            <FontAwesome name="bars" size={25} color={'white'}/>
        </View>
    </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    options:{
        marginLeft: 3,
        marginRight: 10
    }
});