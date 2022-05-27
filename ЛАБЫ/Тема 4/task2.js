// Задание 2
function getCurrency(price) {
    if (price.includes("$"))
        return "Доллар";
    else if (price.includes("€"))
        return "Евро";
    else
        return "Недоступно";
}

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    console.log(getCurrency(input));
    rl.close();
});