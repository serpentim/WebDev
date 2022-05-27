const task1 = document.querySelector('#inputTask1');
const result1 = document.querySelector('#resultTask1');
function getAge(age) {
    return parseInt(age) + 1;
}
task1.addEventListener("input", () => {
    result1.textContent = getAge(task1.value);
});


const task2Number = document.querySelector('#inputTask2Number');
const task2Divider = document.querySelector('#inputTask2Divider')
const result2 = document.querySelector('#resultTask2');
function getRemainder(number, divider) {
    return parseInt(number) % parseInt(divider);
}
task2Divider.addEventListener("input", () => {
    result2.textContent = getRemainder(task2Number.value, task2Divider.value);
});


const task3 = document.querySelector('#inputTask3');
const result3 = document.querySelector('#resultTask3');
function faceControl(age) {
    if (parseInt(age) >= 18)
        return "Welcome";
    else {
        return "Отказ";
    }
}
task3.addEventListener("input", () => {
    result3.textContent = faceControl(task3.value);
});


const task4 = document.querySelector('#inputTask4');
const result4 = document.querySelector('#resultTask4');
function getNextAge(age) {
    if (age === "")
        return 0;
    else
        return parseInt(age) + 1;
}
if (task4.value === "") {
    result4.textContent = "0";
}
task4.addEventListener("input", () => {
    result4.textContent = getNextAge(task4.value);
});


const task5 = document.querySelector('#inputTask5');
const result5 = document.querySelector('#resultTask5');
function canRide(height) {
    return parseInt(height) >= 140;
}
task5.addEventListener("input", () => {
    result5.textContent = canRide(task5.value);
});