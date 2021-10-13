import React from "react";
import { NavigationContainer, StyleSheet, } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArrowBack } from "../components/ArrowBack";

export function StackNavigator() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={<ArrowBack/>} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});