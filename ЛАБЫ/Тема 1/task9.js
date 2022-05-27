function getNormalize(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase()
}

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on('line', (input) => {
  word = input;
    
  console.log(getNormalize(word));
  rl.close();
});