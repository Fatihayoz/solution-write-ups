function oddProduct(arr) {
    return arr.filter(x => x % 2 !== 0).reduce((a,b) => a * b);
}

function oddProduct(arr) {
	let product = 1;
	for( let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 1) {
			product = product * arr[i];
		}		
	} return product;
}

function oddProduct(arr) {
	let oddArray = arr.filter(x => x % 2 === 1);
	let product = 1;
	for (let i = 0; i < oddArray.length; i++) {
		product = product * oddArray[i];
	} return product;
}