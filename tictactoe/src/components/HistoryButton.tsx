import React from "react";
import { TouchableOpacity, Text} from "react-native";
import { Styles } from '../styles/GlobalStyles';

interface HistoryButtonProp {
    title: string;
    onPress:() => void;
}

export default function HistoryButton({title, onPress}: HistoryButtonProp) {
    return (
        <TouchableOpacity style={Styles.button} onPress={onPress}>
            <Text style={Styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}