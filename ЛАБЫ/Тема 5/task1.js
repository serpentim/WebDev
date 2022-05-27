const etherium = {
    usd: 2811,
    rub: 200612,
    eur: 2666
};

function getRate(concurrency) {
    switch(concurrency) {
        case "usd":
            return etherium.usd;
        case "rub":
            return etherium.rub;
        case "eur":
            return etherium.eur;
        default:
            return null;
    }
}

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    console.log(getRate(input));
    rl.close();
});