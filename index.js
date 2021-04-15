// const rl = require('./input.js');
const readline = require("readline");


console.log('\x1b[36m%s\x1b[0m', 'Welcome to TicTacToe CLI!')
const board = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
console.table(board);

let squaresPlayed = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const checkSquareIsEmpty = (square) => {
  return squaresPlayed.indexOf(square) !== square
}

const checkRow = (array, player) => {
  return array.join('') === `${player}${player}${player}`;
}

const tictactoe = (player) => {
  rl.question(`What is your move ${player}? `, (move) => {
    if (move < 1 || move > 9 ) {
      console.log('Invalid input, try again.')
      tictactoe(player);
      return;
    }
    if (squaresPlayed.includes(move)) {
      console.log('Already played, try again.')
      tictactoe(player);
      return;
    }
    squaresPlayed.push(move);
    if (checkSquareIsEmpty(move)) {
      let array = Math.floor(move/3);
      let index = (move % 3) - 1;
      if (index === -1) {
        array--;
        index = 2;
      }
      board[array][index] = player;
      console.clear();
      console.table(board);
      console.log('\n');

      if(checkRow(board[array], player)) {
        console.log('Winner')
        rl.close();
        return;
      }

      if (board[2][2] === 'X') {
        console.log('Winner')
        rl.close();
        return;
      }

      if (player === 'X') {
        tictactoe('0');
      } else {
        tictactoe('X');
      }
    };
  });
}
tictactoe('X');

