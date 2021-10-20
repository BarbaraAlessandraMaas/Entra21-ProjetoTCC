import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { TelaLogin } from "../screens/TelaLogin";
import { TelaRegistro } from "../screens/TelaRegistro";
import { TelaEndereco } from "../screens/TelaEndereco";
import { TelaCidade } from "../screens/TelaCidade";
import { TelaConfirmarRegistro } from "../screens/TelaConfirmarRegistro";
import { TabNavigation } from "../routes/TabNavigation";
import { TelaPlanos } from "../screens/TelaPlanos";
import { TelaOpcoes } from "../screens/TelaOpcoes";
import { TelaAjuda } from "../screens/TelaAjuda";
import { TelaTopico } from "../screens/TelaTopico";
import { TelaTopico1 } from "../screens/TelaTopico1";
import { TelaDetalhes } from "../screens/TelaDetalhes";
import { TelaChat } from "../screens/TelaChat";

const Stack = createStackNavigator();

export function StackScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="TelaLogin" component={TelaLogin} options={{ headerShown: false }} />
                <Stack.Screen name="TelaRegistro" component={TelaRegistro} options={{ headerShown: false }} />
                <Stack.Screen name="TelaEndereco" component={TelaEndereco} options={{ headerShown: false }} />
                <Stack.Screen name="TelaCidade" component={TelaCidade} options={{ headerShown: false }} />
                <Stack.Screen name="TelaConfirmarRegistro" component={TelaConfirmarRegistro} options={{ headerShown: false }} />
                <Stack.Screen name="TabNavigation" component={TabNavigation} options={{ headerShown: false }} />
                <Stack.Screen name="TelaPlanos" component={TelaPlanos} options={{ headerShown: false }} />
                <Stack.Screen name="TelaOpcoes" component={TelaOpcoes} options={{ headerShown: false }} />
                <Stack.Screen name="TelaAjuda" component={TelaAjuda} options={{ headerShown: false }} />
                <Stack.Screen name="TelaTopico" component={TelaTopico} options={{ headerShown: false }} />
                <Stack.Screen name="TelaTopico1" component={TelaTopico1} options={{ headerShown: false }} />
                <Stack.Screen name="TelaDetalhes" component={TelaDetalhes} options={{ headerShown: false }} />
                <Stack.Screen name="TelaChat" component={TelaChat} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}