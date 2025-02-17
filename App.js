import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Primeiro, { Segundo, Terceiro } from "./Components/Primeiro";


const App = () => {
  return (
    <SafeAreaView>
      <Text style={style.txt}>
        Gabriel Teodoro
      </Text>
      <Primeiro />
      <Segundo />
      <Terceiro />
    </SafeAreaView >
  )
}

const style = StyleSheet.create({
  txt: {
    color: "#0000CD"
  }
})

export default App