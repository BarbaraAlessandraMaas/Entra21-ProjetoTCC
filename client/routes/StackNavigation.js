import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TelaInicio } from "../screens/TelaInicio";
import { MeusPlanos } from "../screens/MeusPlanos";
import { TelaNotificacoes } from "../screens/TelaNotificacoes";
import { MinhaConta } from "../screens/MinhaConta";
import { OptionsBar } from "../components/OptionsBar";

const Stack = createNativeStackNavigator();

export function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="TelaInicio">
      <Stack.Screen
        name="TelaInicioDrawer"
        component={TelaInicio}
        options={{
          title: "Inicio",
          headerTitleStyle: {
            color: "white",
          },
          headerStyle: {
            backgroundColor: "#183557",
          },
          headerLeft: () => (
            <OptionsBar />
          ),
        }}
      />

      <Stack.Screen
        name="Notificações"
        component={TelaNotificacoes} options={{
          title: "Inicio",
          headerTitleStyle: {
            color: "white",
          },
          headerStyle: {
            backgroundColor: "#183557",
          },
          headerLeft: () => (
            <OptionsBar />
          ),
        }}
      />
      <Stack.Screen
        name="MinhaConta"
        component={MinhaConta}
        options={{
          title: "Inicio",
          headerTitleStyle: {
            color: "white",
          },
          headerStyle: {
            backgroundColor: "#183557",
          },
          headerLeft: () => (
            <OptionsBar />
          ),
        }}
      />
      <Stack.Screen
        name="MeusPlanos"
        component={MeusPlanos}
        options={{
          title: "Inicio",
          headerTitleStyle: {
            color: "white",
          },
          headerStyle: {
            backgroundColor: "#183557",
          },
          headerLeft: () => (
            <OptionsBar />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator()

export default function TelaInicioDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Inicio" component={TelaInicio} />
    </Drawer.Navigator>
  );
}