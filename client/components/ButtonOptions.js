import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import  TelaInicio from './screens/TelaInicio';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ButtonOptions } from './components/ButtonOptions';

const Stack = createNativeStackNavigator();

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Tela Inicio'>
      <Stack.Screen name="Tela Inicio" component={TelaInicio} options={{          
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
      <Stack.Screen name="detalhes" component={DetailsScreen} />
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