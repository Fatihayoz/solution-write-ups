divisibleByFive = n => !(n%5)

function divisibleByFive(n) {
	if(n % 5 === 0) {
		return true;
	} else {
		return false;
	} 	
}

function divisibleByFive(n) {
	let digitsAsString = n.toString().split('');
	let digits = digitsAsString.map(Number);
	let lastIndex = digits.length - 1;
	let lastDigit = digits[lastIndex];
	if (lastDigit === 0 || lastDigit === 5) {
		return true;
	} else {
		return false;
	}
}