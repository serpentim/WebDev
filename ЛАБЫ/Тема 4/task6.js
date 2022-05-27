// Задание 6
function notAnExcellent(grades) {
    return grades.some(grade => grade < 3);
}

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    let grades = input.split(" ");
    console.log(notAnExcellent(grades));
    rl.close();
});