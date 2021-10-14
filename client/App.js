import React from 'react';
import { StyleSheet } from 'react-native';
import { TelaAjuda } from './screens/TelaAjuda';
import { TelaOpcoes } from './screens/TelaOpcoes';
import { TelaTopico } from './screens/TelaTopico';

export default function App() {
  return (
    // <TelaOpcoes />
    // <TelaAjuda />
    <TelaTopico/>
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
