# [Secret Society](https://edabit.com/challenge/zQm9YZTTFPhNtYjDr)

```
The function return the first letters of the elements of a given array in alphabetical order.
This function could be helpful if you are writing program to check if a letter is missing in a given text.
```

## Syntax

> societyName(`object`) -> `string`

### Parameters

**friends**: `object`

```
An array containing strings.
```

### Return Value: `string`

```
A compound of alphabetically sorted first letters of the given array.
```

## Test Cases

```
Test.assertEquals(societyName(['Adam', 'Sarah', 'Malcolm']), 'AMS')
Test.assertEquals(societyName(['Phoebe', 'Chandler', 'Rachel', 'Ross', 'Monica', 'Joey']), 'CJMPRR')
Test.assertEquals(societyName(['Harry', 'Newt', 'Luna', 'Cho']), 'CHLN')
Test.assertEquals(societyName(['Sherlock', 'Irene', 'John']), 'IJS')
Test.assertEquals(societyName(['Sheldon', 'Amy', 'Penny', 'Howard', 'Raj']), 'AHPRS')
```

## Use Cases

```
friends = ['Adam', 'Sarah', 'Malcolm'];
const result = societyName(friends);
console.log(result) = 'ASM'

friends = ['Sheldon', 'Amy', 'Penny', 'Howard', 'Raj'];
const result = societyName(friends);
console.log(result) = 'AHPRS'
```

---

---

<!-- copy this section for every solution you study -->

## [andytanghr](https://edabit.com/user/en7aFDSggTxYCoxxo)

```js
function societyName(friends) {
	return friends.map( person => person[0].toUpperCase() )
		           .sort()
		           .join('');
}
```

### Strategy

```
andytanghr first tried to find the first letter of each element in the array, 
then he converted them to uppercase. And then sorted them in alphabetical order 
and join them together as a string.
```

### Implementation

```
He used the "map()", "toUpperCase()", "sort()" and "join()"  methods.

The map() method creates a new array populated with the results of calling 
a provided function on every element in the calling array.
The toUpperCase() method returns the calling string value converted to uppercase.
The sort() method sorts the elements of an array and returns the sorted array.
The join() method creates and returns a new string by concatenating all of the elements 
in an array separated by commas or a specified separator string.

He first found the first letter of every element by using the zeroth index and "map()" method. 
By doing this he got an array of first letters of all the elements in the given array. 
Then he used the "toUpperCase()" method to make the elements uppercase. 
And then he sorted them in alphabetical order by using "sort()" method. 
At last, he used the "join('')" method to convert the array into a string without any spaces between them.
```

### Possible Refactors

```
--
```

### References

```
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

```

---

> ... maybe even more write-ups?

---

### Remix

```js
function societyName(friends) {
	let sortedFriends = friends.sort();
	let abbr = '';
	for (let i = 0; i < sortedFriends.length; i++) {
		abbr = abbr + sortedFriends[i][0];	
	}
	return abbr;
}
```

### Strategy
I first sorted the elements, then determined the first letter of the every element in the array.

### Implementation
I wrote a function that uses "sort()" and "length" methods and the "for" loop. 

In the first step the function sorts the elements in the array alphabetically. 
In the second step, in a "for" loop the function searches for the 0-th indexed letter of every string in the array. 
Then the function returns the result as a string.

### Possible Refactors
--

### Inspired By

```
--
```

### References

---

## Retrospective

```
Using "map()" method as a loop is a good practice.
```
