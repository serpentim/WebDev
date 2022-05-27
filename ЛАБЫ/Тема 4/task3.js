//Задание 3
function getSlug(title) {
    let newTitle = title.toLowerCase().replace(" ", "-");
    return newTitle.substring(0, 15);
}

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    console.log(getSlug(input));
    rl.close();
});