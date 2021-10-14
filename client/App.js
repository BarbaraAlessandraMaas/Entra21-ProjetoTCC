import React from 'react';
import { StyleSheet } from 'react-native';
import { TelaAjuda } from './screens/telaAjuda';
import { TelaOpcoes } from './screens/TelaOpcoes';

export default function App() {
  return (
    // <TelaOpcoes />
    <TelaAjuda />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
