import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gameBoard: Array(9).fill(null),
  isXNext: false,
  winner: false,
};

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const calculateWinner = (gameBoard: any[]) => {
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return gameBoard[a]; // Return the winner (either 'X' or 'O')
    }
  }

  if (gameBoard.every((block) => block !== null)) {
    return 'tie'; // Return 'tie' if all blocks are filled with no winner
  }
  return null; // Return null if no winner
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    updateBlock: (state, action) => {
      if (state.winner) {
        return;
      }
      const { index, value } = action.payload;
      const tempArray = [...state.gameBoard];
      tempArray[index] = value;
      state.gameBoard = [...tempArray];
      state.isXNext = !state.isXNext;
      state.winner = calculateWinner(state.gameBoard);
    },
  },
});

export default gameSlice.reducer;
export const gameActions = gameSlice.actions;
