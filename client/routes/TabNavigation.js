import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TelaInicio } from "../screens/TelaInicio";
import { MeusPlanos } from "../screens/MeusPlanos";
import { TelaNotificacoes } from "../screens/TelaNotificacoes";
import { MinhaConta } from "../screens/MinhaConta";
import { Ionicons } from "@expo/vector-icons";
import { TelaOpcoes } from "../screens/TelaOpcoes";

const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

export function DrawerNavigation() {
    return (
        <Drawer.Navigator initialRouteName="Home" drawerContent={props => <TelaOpcoes {...props} />}>
            <Drawer.Screen name="Início" component={TelaInicio} />
            <Drawer.Screen name="Meus Planos" component={MeusPlanos} />
            <Drawer.Screen name="Notificações" component={TelaNotificacoes} />
            <Drawer.Screen name="Minha Conta" component={MinhaConta} />
        </Drawer.Navigator>
    );
}

export function TabNavigation() {
    return (
        <Tab.Navigator
            initialRouteName="TelaInicio"
            barStyle={{ backgroundColor: "#183557" }}
            activeColor="#EAEAEA"
            inactiveColor="white"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
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
            <Tab.Screen name="Início" component={props => <TelaInicioDrawer {...props} />} />
            <Tab.Screen name="Meus Planos" component={MeusPlanos} />
            <Tab.Screen name="Notificações" component={TelaNotificacoes} />
            <Tab.Screen name="Minha Conta" component={MinhaConta} />
        </Tab.Navigator>
    );
}