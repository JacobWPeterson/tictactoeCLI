const readline = require("readline");

console.clear();
console.log('\x1b[36m%s\x1b[0m', 'Welcome to TicTacToe CLI!\n')
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

const checkColumn = (cell, player) => {
  return board[0][cell] + board[1][cell] + board[2][cell]  === `${player}${player}${player}`;
}

const diagonalCheck = (player) => {
  const diagonal1 = [board[0][0], board[1][1], board[2][2]];
  const diagonal2 = [board[0][2], board[1][1], board[2][0]];
  return diagonal1.join('') === `${player}${player}${player}` || diagonal2.join('') === `${player}${player}${player}`
}

const winner = (player) => {
  console.log('\x1b[32m%s\x1b[0m', `\n${player} is the Winner!\n`);
}

const tictactoe = (player) => {
  rl.question(`\nWhat is your move ${player}? `, (move) => {
    if (move < 1 || move > 9 ) {
      console.log('\x1b[31m%s\x1b[0m', '\nInvalid input, try again.\n')
      tictactoe(player);
      return;
    }
    if (squaresPlayed.includes(move)) {
      console.log('\x1b[31m%s\x1b[0m', '\nAlready played, try again.\n')
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

      if(checkRow(board[array], player)) {
        winner(player);
        rl.close();
        return;
      }

      if(checkColumn(index, player)) {
        winner(player)
        rl.close();
        return;
      }

      if(diagonalCheck(player)) {
        winner(player)
        rl.close();
        return;
      }

      if(squaresPlayed.length === 9) {
        console.log('\x1b[32m%s\x1b[0m', 'Tie Game')
        rl.close();
        return;
      } else {
        if (player === 'X') {
          tictactoe('0');
        } else {
          tictactoe('X');
        }
      }
    };
  });
}
tictactoe('X');

