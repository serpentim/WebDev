function myName(name) {
    return name.toUpperCase()
}

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
  name = input;

  console.log(myName(name));
  rl.close();
});