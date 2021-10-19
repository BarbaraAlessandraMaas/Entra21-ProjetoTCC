import React from "react";
import { TelaChat } from "./screens/TelaChat";
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
import { TelaLoading } from "./screens/TelaLoading";

export default function App() {
  return (    
    <StackScreen />
    // <NavigationContainer>
    //   <TabNavigation />
    // </NavigationContainer>
    
    // <TelaLoading />
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
    // <TelaChat />
  );
}