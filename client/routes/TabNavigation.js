import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { TelaInicio } from "../screens/TelaInicio";
import { MeusPlanos } from "../screens/MeusPlanos";
import { TelaNotificacoes } from "../screens/TelaNotificacoes";
import { MinhaConta } from "../screens/MinhaConta";
import { Ionicons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

export function TabNavigation() {
    return (
        <Tab.Navigator
            initialRouteName="TelaInicio"
            barStyle={{ backgroundColor: "#183557" }}
            activeColor="#EAEAEA"
            inactiveColor="white"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case "Início":
                            iconName = focused ? "home" : "home";
                            break;
                        case "Meus Planos":
                            iconName = focused ? "albums" : "albums";
                            break;
                        case "Notificações":
                            iconName = focused ? "notifications" : "notifications";
                            break;
                        case "Minha Conta":
                            iconName = focused ? "person-circle" : "person-circle";
                            break;
                    }
                    return <Ionicons name={iconName} size={22} color="white" />
                }
            })}
        >
            <Tab.Screen name="Início" component={TelaInicio} />
            <Tab.Screen name="Meus Planos" component={MeusPlanos} />
            <Tab.Screen name="Notificações" component={TelaNotificacoes} />
            <Tab.Screen name="Minha Conta" component={MinhaConta} />
        </Tab.Navigator>
    );
}