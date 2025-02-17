import React from "react";
import { Text, View } from "react-native";

function Primeiro() {
    return (
        <View>
            <Text>
                Primeiro componente
            </Text>
        </View>
    )
}

function Segundo() {
    return (
        <Text>
            Segundo componente
        </Text>
    )
}

function Terceiro() {
    return (
        <Text>
            Terceiro componente
        </Text>
    )
}
export { Segundo, Terceiro };
export default Primeiro
