// Задание 8
function multiply(strNums) {
    let nums = [];
    for (let i = 0; i < strNums.length; i++) {
        nums[i] = parseInt(strNums[i]);
    }

    return nums.reduce((acc, cur) => {
        return acc * cur;
    });
}

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    let nums = input;
    nums = nums.substring(1, nums.length - 1);
    console.log(multiply(nums.split(",")));
    rl.close();
});