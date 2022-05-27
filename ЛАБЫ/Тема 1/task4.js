function notFirstLetter(text) {
    return text.substring(1)
}

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on('line', (input) => {
  text = input;

  console.log(notFirstLetter(text));
  rl.close();
});