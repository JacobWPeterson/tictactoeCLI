// const rl = require('./input.js');
const readline = require("readline");


console.log('\x1b[36m%s\x1b[0m', 'Welcome to TicTacToe CLI!')
const board = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
console.table(board);

let squaresPlayed = [];

let currentPlayer = 'X';

const checkSquareIsEmpty = (square) => {
  return squaresPlayed.indexOf(square) !== square
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tictactoe = (player) => {
  rl.question(`What is your move ${player}? `, (move) => {
    if (move < 1 || move > 9 ) {
      console.log('Invalid input, try again.')
      tictactoe(currentPlayer);
      return;
    }
    if (checkSquareIsEmpty(move)) {
      let array = Math.floor(move/3);
      let index = (move % 3) - 1;
      if (index === -1) {
        array--;
        index = 2;
      }
      board[array][index] = currentPlayer;
      console.table(board)

      if (board[2][2] === 'X') {
        console.log('Winner')
        rl.close();
        return;
      }

      if (currentPlayer === 'X') {
        tictactoe('0');
      } else {
        tictactoe('X');
      }
    };
  });
}
tictactoe(currentPlayer);

