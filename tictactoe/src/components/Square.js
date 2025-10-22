import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function Square({ value, onSquareClick }) {
  return (
    <TouchableOpacity onPress={onSquareClick}>
      <Text>{value}</Text>
    </TouchableOpacity>
  );
}
