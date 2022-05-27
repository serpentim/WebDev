class User {
    constructor(id, type) {
        this.id = id;
        this.type = type;
    }

    getId() {
        return `#${(this.id)}`;
    }

    isAdmin() {
        return (this.type === '\'Admin\'');
    }
}

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    let inputUser = input.split(" ");

    let user = new User(inputUser[0], inputUser[1]);

    let output = user.getId();
    output += " " + user.isAdmin();
    console.log(output);
    rl.close();
});