function getValues(obj) {
    let values = Object.values(obj);
    for (let i = 0; i < values.length; i++) {
        values[i] = `'${values[i].toUpperCase()}'`;
    }
    return values;
}

let output = getValues({lang: "JavaScript", course: "third"}).toString();
output = output.replace(",", ", ");
console.log(`[ ${output} ]`)