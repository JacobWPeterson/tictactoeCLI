const readline = require("readline");

const prompt = (player, callback) => {
  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });

  rl.question(`What is your move ${player}? `, (move) => {
    callback(move);
    rl.close();
  });

  rl.on("close", function() {
      console.log("\nThanks");
      process.exit(0);
  });
}

module.exports = { prompt };
