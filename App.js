import React from "react";
import { SafeAreaView, Text } from "react-native";
import Estilo from "./Components/Estilo";
import Primeiro, { Segundo, Terceiro } from "./Components/Primeiro";
import Somar from "./Components/Somar";


const App = () => {
  return (
    <SafeAreaView style={Estilo.corpo}>
      <Text style={Estilo.txt}>
        Gabriel Teodoro
      </Text>
      <Primeiro />
      <Segundo />
      <Terceiro />
      <Somar num1="10" num2="20" />
    </SafeAreaView >
  )
}

export default App