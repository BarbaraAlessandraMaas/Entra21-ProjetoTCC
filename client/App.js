import React from 'react';
import { StyleSheet } from 'react-native';
import { TelaOpcoes } from './screens/TelaOpcoes';

export default function App() {
  return (
    <TelaOpcoes />
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
