// Задание 7
function deleteUserRole(roles) {
    roles.splice(0, 1);
    return roles;
}

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    let roles = input.split(" ");
    let str = deleteUserRole(roles);
    for (let i = 0; i < str.length; i++) {
        str[i] = `'${str[i]}'`;
    }
    str = str.toString();
    str = str.replace(",", ", ");
    console.log("[" + str + "]");
    rl.close();
});