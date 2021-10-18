import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { TelaEndereco } from "../screens/TelaEndereco";
import { TelaRegistro } from "../screens/TelaRegistro";
import { OptionBar } from "../components/OptionBar";
import { TelaLogin } from "../screens/TelaLogin";
import { DrawerNavigation, TabNavigation } from "./TabNavigation";
import { TelaPlanos } from "../screens/TelaPlanos";
import { TelaOpcoes } from "../screens/TelaOpcoes";
import { TelaDetalhes } from "../screens/TelaDetalhes";

const Stack = createStackNavigator();

export function StackScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="TelaLogin" component={TelaLogin} options={{ headerShown: false }} />
                <Stack.Screen name="TelaRegistro" component={TelaRegistro} options={{ headerShown: false }} />
                <Stack.Screen name="TelaEndereco" component={TelaEndereco} options={{ headerShown: false }} />
                <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} options={{ headerShown: false }} />
                <Stack.Screen name="TelaPlanos" component={TelaPlanos} options={{ headerShown: false }} />
                <Stack.Screen name="TelaOpcoes" component={TelaOpcoes} options={{ headerShown: false }} />
                <Stack.Screen name="OptionBar" component={OptionBar} options={{ headerShown: false }} />
                <Stack.Screen name="TelaDetalhes" component={TelaDetalhes} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}