import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Board from './components/Board';
import { Styles } from './styles/GlobalStyles';
import ResetButton from './components/ResetButton';
import HistoryButton from './components/HistoryButton';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: Array<String>) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move: number) {
    setCurrentMove(move);
    setIsDropdownOpen(false);
  }

  function restartGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setIsDropdownOpen(false);
  }

  const moves = history.map((squares, move) => ({
    key: move.toString(),
    label: move ? `Go to move #${move}` : 'Go to start',
  }));

  return (
    <View style={Styles.gameContainer}>
      <View style={Styles.boardSection}>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        
        <View style={Styles.controlsContainer}>
          <ResetButton title='Restart Game' onPress={restartGame}></ResetButton>
          
          <View style={Styles.dropdownWrapper}>
            <HistoryButton title='Moves ▴' onPress={() => setIsDropdownOpen(!isDropdownOpen)}></HistoryButton>
              {isDropdownOpen && (
                <View style={Styles.dropdownList}>
                  <FlatList
                    data={moves}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item, index }) => (
                      <TouchableOpacity style={Styles.dropdownItem} onPress={() => jumpTo(index)}>
                        <Text style={Styles.dropdownItemText}>{item.label}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              )}
          </View>

        </View>
      </View>
      
    </View>
  );
}
