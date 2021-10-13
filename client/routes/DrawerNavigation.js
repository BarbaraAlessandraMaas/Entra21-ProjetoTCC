import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import  { TelaInicio } from '../screens/TelaInicio';
import  { MeusPlanos }  from '../screens/MeusPlanos';
import  { Notificacoes } from '../screens/Notificacoes';
import  { MinhaConta } from '../screens/MinhaConta';

const Drawer = createDrawerNavigator()

export default function TelaInicioDrawer() {
    return (
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Tela Inicial" component={TelaInicio} />
          <Drawer.Screen name="Meus Planos" component={MeusPlanos} />
          <Drawer.Screen name="Notificações" component={Notificacoes} />
          <Drawer.Screen name="Minha Conta" component={MinhaConta} />
        </Drawer.Navigator>
    );
  }