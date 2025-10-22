import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  // App container
  appContainer: {
    flex: 1,
    backgroundColor: '#0d1117',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Game container
  gameContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 30,
  },

  // Board styles
  boardContainer: {
    alignItems: 'center',
  },
  boardRow: {
    flexDirection: 'row',
  },
  statusText: {
    color: '#58a6ff',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '600',
  },

  // Board section
  boardSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  // Square styles
  square: {
    width: 90,
    height: 90,
    backgroundColor: '#161b22',
    borderWidth: 2,
    borderColor: '#30363d',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
    borderRadius: 10,
  },
  squareText: {
    color: '#c9d1d9',
    fontSize: 36,
    fontWeight: 'bold',
  },

  // History section
  historyContainer: {
    alignItems: 'center',
  },
  historyTitle: {
    color: '#f0f6fc',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '600',
    textAlign: 'center',
  },
  moveButton: {
    backgroundColor: '#21262d',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 4,
    minWidth: 140,
  },
  moveText: {
    color: '#c9d1d9',
    fontSize: 16,
    textAlign: 'center',
  },

  // Reset button
  resetButton: {
    backgroundColor: '#21262d',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {width: 2, height: 2},
  },
  resetText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});
