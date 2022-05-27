class AreaOfCircle {
    constructor(radius) {
        this._radius = radius;
    }
    set radius(value) {
        this._radius = Number.parseInt(value, 10);
    }

    get radius() {
        let pi = 3.14159265359;
        return Math.trunc(pi * this._radius * this._radius * 100) / 100;
    }
}

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    const area = new AreaOfCircle(input);
    console.log(area.radius);
    rl.close();
});