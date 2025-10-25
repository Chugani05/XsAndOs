import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Styles } from '../styles/GlobalStyles';

interface ResetButtonProp {
    title: string;
    onPress:() => void;
}

export default function ResetButton({title, onPress}: ResetButtonProp) {
    return (
        <TouchableOpacity style={Styles.button} onPress={onPress}>
            <Text style={Styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}