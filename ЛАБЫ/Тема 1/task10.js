function getHTML(titleOne, titleTwo) {
    return `<div>
  <h1>${titleOne}<h1>
  <h2>${titleTwo}<h1>
</div>`;
}

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on('line', (input) => {
  let title = input.split(" ");
    
  console.log(getHTML(title[0], title[1]));
  rl.close();
});