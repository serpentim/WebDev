function getLastLetter(text) {
    return text[text.length-1]
}

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on('line', (input) => {
  text = input;

  console.log(getLastLetter(text));
  rl.close();
});