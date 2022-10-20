let a = [];
let b = [];
let sumA = [];
let sumB = [];
let n = 0;
let m = 0;
let s = 0;
let lineNumber = 0;
let numberOfLines = 0;
let result = 0;

let allRes = []

function countResumes(a, b) {
	// sumA = resultArray(a); // эти 
	// sumB = resultArray(b); // два вычисления избыточны, потому что создаёшь новую структуру, похожую на исходную
	howMuch(a, b);
	howMuch(b, a);
    console.log(allRes);
	return result;
}
function howMuch(firstArray, secondArray) {
	let currentResult = 0;
    let summa = s;
	firstArray.forEach((element, index) => {
		if (summa >= element) {
			currentResult = index + 1;
			summa = summa - element;
			secondArray.forEach(element => {
				if (summa >= element) {
					currentResult++;
				}
			});
		}
		if (currentResult > result) { result = currentResult; }
	});
    allRes.push(currentResult)
}
function resultArray(array) {
	let newArray = [];
	let sum = s;
	prevElement = 0;
	array.forEach(element => {
		if (sum > element) {
			prevElement = element + prevElement;
			newArray.push(prevElement);
			sum = sum - element;
		}
		else {
			sum = 0;
		}
	});
	return newArray;
}

const readline = require('readline').createInterface(process.stdin, process.stdout);
readline.on('line', (line) => {
	let lineContent = line.split(' ');
	if (lineNumber === 0) {
		n = lineContent[0];
		m = lineContent[1];
		s = lineContent[2];
		numberOfLines = n > m ? n : m; // проще будет Math.max
	}
	else {
		if (lineNumber <= n) {
			a.push(Number(lineContent[0]));
		}
		if (lineNumber <= m) {
			b.push(Number(lineContent[1]));
		}
	}
	lineNumber++;

	if (lineNumber <= numberOfLines) { return; }

	if (lineNumber > 1) { // вот это условие непонятно зачем, до него не будет доходить выполнение из-за return сверху. Только самый последний раз
		console.log(String(countResumes(a, b)));
	}
	else {
		return 0;
	}

	readline.close();
}).on('close', () => {
	process.exit(0)
});