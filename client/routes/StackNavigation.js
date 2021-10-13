import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import  { TelaInicio } from '../screens/TelaInicio';
import  { MeusPlanos }  from '../screens/MeusPlanos';
import  { Notificacoes } from '../screens/Notificacoes';
import  { MinhaConta } from '../screens/MinhaConta';
import  { OptionsBar } from '../components/OptionsBar';
import { TabNavigation } from './DrawerNavigation';
import { DrawerNavigation } from './DrawerNavigation';

const Stack = createNativeStackNavigator();


export function StackNavigation() {    
  return (
    <Stack.Navigator initialRouteName='TelaInicio'>
      <Stack.Screen name="TelaInicioDrawer" component={TelaInicio} 
            options={{          
             title: 'Tela inicial',
             headerTitleStyle: {
               color:'white',
             },
             headerStyle: {
              backgroundColor: '#183557',
             },
             headerLeft: () => (
               <OptionsBar/>
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
               <OptionsBar/>
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
               <OptionsBar/>
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
               <OptionsBar/>
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
          <Drawer.Screen name="Tela Inicial" component={TelaInicio} />
        </Drawer.Navigator>
    );
  }