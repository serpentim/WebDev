// Задание 1
const getNickName = nik => {
    if (!nik.startsWith("@"))
        return "@" + nik;
    return nik;
}

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    console.log(getNickName(input));
    rl.close();
});