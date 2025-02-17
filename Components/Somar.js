import React from "react";
import { Text, View } from "react-native";

export default (props) => {
    return (
        <View>
            <Text>
                Valor do numero 1 : {props.num1} Valor do numero 2: {props.num2}
            </Text>
        </View>
    )
}