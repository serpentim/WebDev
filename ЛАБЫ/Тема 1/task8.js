function getName(firstName, lastName) {
    return `${firstName} ${lastName}`
}

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on('line', (input) => {
  let name = input.split(" ");
    
  console.log(getName(name[0], name[1]));
  rl.close();
});