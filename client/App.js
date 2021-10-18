import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigation } from "./routes/TabNavigation";
import { TelaCidade } from "./screens/TelaCidade";
import { TelaEndereco } from "./screens/TelaEndereco";
import { TelaConfirmarRegistro } from "./screens/TelaConfirmarRegistro";
import { TelaRegistro } from "./screens/TelaRegistro";
import { TelaAjuda } from "./screens/TelaAjuda";
import { TelaOpcoes } from "./screens/TelaOpcoes";
import { TelaTopico } from "./screens/TelaTopico";
import { TelaPlanos } from "./screens/TelaPlanos";
import { TelaLogin } from './screens/TelaLogin';

export default function App() {
  return (
//     <NavigationContainer>
//       <TabNavigation />
//     </NavigationContainer>
    // <TelaEndereco/>
//     <TelaCidade />
    // <TelaRegistro />
//     <TelaConfirmarRegistro />
    // <TelaOpcoes />
    // <TelaAjuda />
//     <TelaTopico />
//     <TelaPlanos />
    <TelaLogin />
  );
}