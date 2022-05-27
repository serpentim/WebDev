//const number = document.querySelector('#inputNumb')
const result1 = document.querySelector('#resultTask1')
function sumArray(numbers) {
	let sum = 0;
	numbers.forEach(function (number) {
		sum += number;
	})
	return sum;
}
result1.textContent = sumArray([4, 6, 16, 73, 5]);


const result2 = document.querySelector('#resultTask2')
function getAboveZero(numbers) {
	let plusTemp = numbers.filter(function(number) {
		return number > 0;
	})
	return plusTemp;
}
result2.textContent = getAboveZero([1, -3, -2, 4, 10]);


const result3 = document.querySelector('#resultTask3')
function getPonies(array) {
	let ponyName = 'AppleJack';
	array.find(function(pony) {
		return pony;
	})
	return ponyName;
}
result3.textContent = getPonies(['TwilightSparkle', 'RainbowDash', 
	'AppleJack', 'Rarity', 'Pinkie Pie', 'Fluttershy']);


const result4 = document.querySelector('#resultTask4')
function isTxIncluded(array) {
	let Tx = "0x9e0a";
	return array.includes(Tx);
}
result4.textContent = isTxIncluded(["0xaea0","0x8f80", "0xf3ad", "0x17ec"]);


const result5 = document.querySelector('#resultTask5')
function getSizes(strings) {
	return strings.map(function(element) {
		return element.length;
	})
}
result5.textContent = getSizes(["Moscow", "Coding", "School"]);


const result6 = document.querySelector('#resultTask6')
function getWithSpaces(strings) {
	let array = [];
	array.push(strings.join(" "));
	array.push(strings.join("").length);
	return array;
}
result6.textContent = getWithSpaces(["Moscow", "never", "sleep"]);


const result7 = document.querySelector('#resultTask7')
function getEpisodes({title, episodes}) {
	const anime = {
		title: title,
		episodes: episodes
	};
	return "Аниме " + anime.title + " включает " + anime.episodes + " серий";
}
result7.textContent = getEpisodes({title:"Code Geass", episodes: 25});


const result8 = document.querySelector('#resultTask8')
const triple = (number) => {
	return number * 3;
}
result8.textContent = triple(2);


const result9 = document.querySelector('#resultTask9')
const getAvgGlucose = (checks) => {
	let sum = 0;
	checks.forEach(function (check) {
		sum += check;
	});
	return sum / checks.length;
}
result9.textContent = getAvgGlucose([5.4, 8.1, 6.3, 4.9]);