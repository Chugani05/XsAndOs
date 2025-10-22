import React from 'react';
import { View, Text } from 'react-native';
import Square from './Square';
import { calculateWinner } from '../utils/calculateWinner';

export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <View>
      <Text>{status}</Text>
      {[0, 3, 6].map((rowStart) => (
        <View key={rowStart} >
          <Square value={squares[rowStart]} onSquareClick={() => handleClick(rowStart)} />
          <Square value={squares[rowStart + 1]} onSquareClick={() => handleClick(rowStart + 1)} />
          <Square value={squares[rowStart + 2]} onSquareClick={() => handleClick(rowStart + 2)} />
        </View>
      ))}
    </View>
  );
}
