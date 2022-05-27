// Задание 9
function getInfo(user) {
    const [name, age] = user;
    console.log("Пользователю " + name + " - " + age + " лет.");
}

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// входные данные: Нина, 25
rl.on('line', (input) => {
    let user = input;
    user = user.substring(1, user.length - 1).split(", ");
    user[0] = user[0].substring(1, user[0].length - 1);
    getInfo(user);
    rl.close();
});