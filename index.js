const rl = require('./input.js');

console.log('\x1b[36m%s\x1b[0m', 'Welcome to TicTacToe CLI!')

rl.prompt('X', (name) => {
  console.log(name)
});