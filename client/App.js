import React from 'react';
import { StyleSheet } from 'react-native';
import { TelaCidade } from './screens/TelaCidade';
import { TelaEndereco } from './screens/TelaEndereco';

export default function App() {
  return (
    <TelaEndereco/>
    // <TelaCidade/>
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
