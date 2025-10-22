import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Game from '../src/Game';
import { Styles } from '../src/styles/GlobalStyles';


export default function App() {
  return (
    <SafeAreaView style={Styles.appContainer}>
      <Game />
    </SafeAreaView>
  );
}
