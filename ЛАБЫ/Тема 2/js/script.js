const number = document.querySelector('#inputNumb')
const result = document.querySelector('#resultFirstExercise')

function getNumb(arg1) {
	return arg1.toString()
}

number.addEventListener("input", () => {
	result.textContent = getNumb(number.value)
})

//const array1 = ['a', 'b', 'c'];
//array1.forEach(element => console.log(element));