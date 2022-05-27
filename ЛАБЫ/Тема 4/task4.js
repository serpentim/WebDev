// Задание 4
function getTodosNumber(ToDoList) {
    let ToDoArray = ToDoList.split(",");
    return ToDoArray.length;
}

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    console.log(getTodosNumber(input));
    rl.close();
});