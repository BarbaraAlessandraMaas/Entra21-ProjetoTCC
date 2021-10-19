import React from "react";
import { TelaDetalhes } from "./screens/TelaDetalhes";
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
import { StackScreen } from "./routes/StackScreen";

export default function App() {
  return (    
    <StackScreen />

    // <NavigationContainer>
    //   <TabNavigation />
    // </NavigationContainer>
    
    // <TelaDetalhes />
    // <TelaEndereco/>
    // <TelaCidade />
    // <TelaRegistro />
    // <TelaConfirmarRegistro />
    // <TelaOpcoes />
    // <TelaAjuda />
    // <TelaTopico />
    // <TelaPlanos />
    // <TelaLogin />
  );
}