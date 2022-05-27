// Задание 10
function joinArrays(array1, array2) {
    return [...array1, ...array2]
}

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    let array = input.split(" ");
    
    console.log(joinArrays(array[0], array[1]));
    rl.close();
});