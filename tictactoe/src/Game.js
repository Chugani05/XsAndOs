import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Board from './components/Board';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
  }

  const moves = history.map((squares, move) => ({
    key: move.toString(),
    label: move ? `Go to move #${move}` : 'Go to game start',
  }));

  return (
    <View>
      {/* Tablero */}
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />

      {/* Historial */}
      <View>
        <Text>Game History</Text>
        <FlatList
          data={moves}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => jumpTo(Number(item.key))}>
              <Text>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
