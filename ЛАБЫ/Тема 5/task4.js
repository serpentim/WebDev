let obj1 = {id: 1,type: 'text',length: 20};
let obj2 = {name: 'object2',type: 'number'};

let joinArrays = {...obj1, ...obj2}

console.log(joinArrays);