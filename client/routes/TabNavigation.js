import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import  { TelaInicio } from '../screens/TelaInicio';
import  { MeusPlanos }  from '../screens/MeusPlanos';
import  { Notificacoes } from '../screens/Notificacoes';
import  { MinhaConta } from '../screens/MinhaConta';
import { FontAwesome } from '@expo/vector-icons';


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
                        case "Tela Início":
                            iconName = focused ? "home" : "home" ;
                            break;
                        case "Meus Planos":
                            iconName = focused ? 'signal' : 'signal';
                            break;
                        case "Notificações":
                            iconName = focused ? 'bell' : 'bell';
                            break;
                        case "Minha Conta":
                            iconName = focused ? 'user' : 'user';
                        break;
                        default:
                            return
                    }
                    return <FontAwesome name={iconName} size={22} color={color} />
                }
            })}
        >
            <Tab.Screen name="Tela Início" component={TelaInicio} />
            <Tab.Screen name="Meus Planos" component={MeusPlanos} />
            <Tab.Screen name="Notificações" component={Notificacoes} />
            <Tab.Screen name="Minha Conta" component={MinhaConta} />
                 
        </Tab.Navigator>   
    );
}