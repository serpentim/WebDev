class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

function createUser(name, email) {
    return new User(name, email);
}

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    let inputUser = input.split(" ");
    console.log(createUser(inputUser[0], inputUser[1]));
    rl.close();
});