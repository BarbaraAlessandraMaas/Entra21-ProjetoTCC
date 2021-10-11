import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import  TelaInicio from './screens/TelaInicio';
import  MeusPlanos from './screens/MeusPlanos';
import  Notificações from './screens/Notificações';
import  MinhaConta from './screens/MinhaConta';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ButtonOptions } from './components/ButtonOptions';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Tela Inicio'>
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
         <Stack.Screen name="Notificações" component={Notificações} options={{          
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
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})