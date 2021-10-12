import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import  { TelaInicio } from '../screens/TelaInicio';
import  { MeusPlanos }  from '../screens/MeusPlanos';
import  { Notificacoes } from '../screens/Notificacoes';
import  { MinhaConta } from '../screens/MinhaConta';
import  { ButtonOptions } from '../components/ButtonOptions';

const Stack = createNativeStackNavigator();

export function StackNavigation() {    
  return (
    <Stack.Navigator initialRouteName='TelaInicio'>
      <Stack.Screen name="TelaInicio" component={TelaInicio} options={{          
             title: 'Tela inicial',
             headerTitleStyle: {
               color:'white',
             },
             headerStyle: {
              backgroundColor: '#183557',
             },
             headerLeft: () => (
               <ButtonOptions/>
             ),
           }}
         />
         <Stack.Screen name="Notificações" component={Notificacoes} options={{          
             title: 'Tela inicial',
             headerTitleStyle: {
               color:'white',
             },
             headerStyle: {
              backgroundColor: '#183557',
             },
             headerLeft: () => (
               <ButtonOptions/>
             ),
           }}
         />
         <Stack.Screen name="MinhaConta" component={MinhaConta} options={{          
             title: 'Tela inicial',
             headerTitleStyle: {
               color:'white',
             },
             headerStyle: {
              backgroundColor: '#183557',
             },
             headerLeft: () => (
               <ButtonOptions/>
             ),
           }}
         />
         <Stack.Screen name="MeusPlanos" component={MeusPlanos} options={{          
             title: 'Tela inicial',
             headerTitleStyle: {
               color:'white',
             },
             headerStyle: {
              backgroundColor: '#183557',
             },
             headerLeft: () => (
               <ButtonOptions/>
             ),
           }}
         />
    </Stack.Navigator>
  );
}