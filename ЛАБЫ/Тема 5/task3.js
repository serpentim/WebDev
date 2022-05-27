function getInfo(obj) {
    let keys = Object.keys(obj);
    let str = "";
    for (let i = 0; i < keys.length; i++) {
        str += `{ key: '${keys[i]}' }`;
        if (i < keys.length - 1)
            str += "\n";
    }
    return str;
}

const address = {
    street: 'Lenina',
    building: 1,
    flat: 40
};

console.log(getInfo(address));