import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Styles } from '../styles/GlobalStyles';

type Props = {value: string, onSquareClick:() => void}

export default function Square({ value, onSquareClick }: Props) {
  return (
    <TouchableOpacity style={Styles.square} onPress={onSquareClick}>
      <Text style={Styles.squareText}>{value}</Text>
    </TouchableOpacity>
  );
}
