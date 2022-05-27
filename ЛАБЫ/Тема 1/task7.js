function heyEverybody(name) {
    return "Hello, " + name
}

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on('line', (input) => {
  name = input;
    
  console.log(heyEverybody(name));
  rl.close();
});