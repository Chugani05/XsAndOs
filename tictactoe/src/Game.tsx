import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Board from './components/Board';
import { Styles } from './styles/GlobalStyles';
import ResetButton from './components/ResetButton';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: Array<String>) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move: any) {
    setCurrentMove(move);
  }

  function restartGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  const moves = history.map((squares, move) => ({
    key: move.toString(),
    label: move ? `Go to move #${move}` : 'Go to game start',
  }));

  return (
    <View style={Styles.gameContainer}>
      <View>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        <ResetButton title='Restart Game' onPress={restartGame}></ResetButton>
      </View>

      <View style={Styles.historyContainer}>
        <Text style={Styles.historyTitle}>Game History</Text>
        <FlatList
          data={moves}
          renderItem={({ item }) => (
            <TouchableOpacity style={Styles.moveButton} onPress={() => jumpTo(Number(item.key))}>
              <Text style={Styles.moveText}>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
