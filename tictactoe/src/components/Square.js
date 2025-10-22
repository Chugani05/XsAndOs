import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Styles } from '../styles/GlobalStyles';

export default function Square({ value, onSquareClick }) {
  return (
    <TouchableOpacity style={Styles.square} onPress={onSquareClick}>
      <Text style={Styles.squareText}>{value}</Text>
    </TouchableOpacity>
  );
}
