function getStroka(text) {
    return text.substring(0, 5)
}

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on('line', (input) => {
  text = input;
    
  console.log(getStroka(text));
  rl.close();
});