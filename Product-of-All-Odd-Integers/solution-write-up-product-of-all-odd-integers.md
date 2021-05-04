# [Product of All Odd Integers](https://edabit.com/challenge/4LnwAC3kgTctc7r3k)

```
Odd numbers are the whole numbers that can't be divided into equal pairs. 
Odd numbers have the numbers 1, 3, 5, 7 or 9 in their ones place.
The function returns the product of all odd integers in a given array.

This function could be helpful if you are writing an app which only accepts 
the odd numbers that are written as two different odd numbers. 
Because only the product of an odd number by an odd number gives an odd number. 
All the other possibilities return even numbers. 
```

## Syntax

> oddProduct(`object`) -> `number`

### Parameters

**arr**: `object`

```
An array containing integers.
```

### Return Value: `number`

```
An odd number that is the product of the odd numbers in the array.
```

## Test Cases

```
Test.assertEquals(oddProduct([3, 4, 1, 1, 5]), 15)
Test.assertEquals(oddProduct([5, 5, 8, 2, 4, 32]), 25)
Test.assertEquals(oddProduct([1, 2, 1, 2, 1, 2, 1, 2]), 1)
Test.assertEquals(oddProduct([0, 0, 0, 1]), 1)
Test.assertEquals(oddProduct([1, 2, 2, 5, 2, 0]), 5)
```

## Use Cases

```
arr = [1,2,3];
const product = oddProduct (arr);
console.log (product); //3

arr = [-1,1,-1];
const product = oddProduct (arr);
console.log (product); //1
```

---

---

<!-- copy this section for every solution you study -->

## [Kiernan Hogan](https://edabit.com/user/zCnpzvxedwjvfGL87)

```js
function oddProduct(arr) {
  return arr.filter(x => x % 2 !== 0).reduce((a,b) => a * b);
}
```

### Strategy

```
Kiernan Hogan first tried to find the odd integers in the given array, 
then he multiplied the returned values.
```

### Implementation

```
Kiernan Hogan wrote a two-line function to solve the challenge. 
He used "filter()" and "reduce()" methods in his solution. 

"filter()" method returns a new array with all elements that pass the test 
which is implemented by the given function.

"reduce()" method returns a function you write on each element of the array 
and results a single output value.

He first got the odd integers as an array by "filter()" method. 
In this method, he find the odd numbers by the "remainder" operator 
by strictly unequalizing them to zero. 

Then he had the product by using "reduce()" method. 
In this method, he wrote a "reducer function" inside the statement 
with two parameters and an equation.  
```

### Possible Refactors

```
This strategy could also be implemented with:
    * "if" statement in a "for" loop
    * "map()" method
```

### References

```
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
```

---

> ... maybe even more write-ups?

---

### Remix

```js
function oddProduct(arr) {
	let oddArray = arr.filter(x => x % 2 === 1);
	let product = 1;
	for (let i = 0; i < oddArray.length; i++) {
		product = product * oddArray[i];
	} return product;
}
```

### Strategy
I first determined the odd numbers, the find the product of them.

### Implementation
I wrote a function that uses "filter()" method and "for" loop. 

In the first step, "filter()" method creates a new array with all elements 
that pass the test implemented by the provided function. That gives the odd integers as an array.

In the next step, "for" loop iterates over the every element in the new array and multiplies. 

### Possible Refactors
This strategy could also be implemented with:
    * "map()" method

### Inspired By

```
function oddProduct(arr) {
  return arr.filter(x => x % 2 !== 0).reduce((a,b) => a * b);
}

I take the "filter()" method to find the odd integers.
```

### References

---

## Retrospective

```
"filter()" and the following "reduce()" method shortens the code.
"map()" method is a good practice.
```
