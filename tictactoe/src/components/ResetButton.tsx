import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface ResetButtonProp {
    title: string;
    onPress:() => void;
}

export default function ResetButton({title, onPress}: ResetButtonProp) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}