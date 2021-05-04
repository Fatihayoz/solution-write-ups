# [The pH Scale]([link-to-challenge](https://edabit.com/challenge/GmAuzN42QXxPNpSmF))

```
pH Scale is used to determine if an solution is acidic or basic (alkaline). 
ph Scale has value between 0 and 14. The value under 7 is considered as acidic, the value over 7 is considered as basic. The value 7 is considered as neutral.

This function returns if a solution is acidic or basic according to the given ph Scale. 

This function could be useful if you are writing an chemistry app and needed to determine the which solution is acidic or basic. 
```

## Syntax

> pHName(`number`) -> `string`

### Parameters

**pH**: `number`

```
A number between 0 and 14 representing the degree of acidity or basicity.
```

### Return Value: `string`

```
"acidic" for the parameter value between 0-7(not included), 
"alkaline" for the parameter value between 7(not included)-14,
"neutral" for the parameter value 7,
"invalid" for the parameter value less than 0 or grater than 14.
```

## Test Cases
Some sample tests from Edabit:
```
Test.assertEquals(pHName(7.0), "neutral")
Test.assertEquals(pHName(7), "neutral")
Test.assertEquals(pHName(14.21), "invalid")
Test.assertEquals(pHName(-4.33), "invalid")
Test.assertEquals(pHName(8.27), "alkaline")
Test.assertEquals(pHName(13.52), "alkaline")
Test.assertEquals(pHName(3.9), "acidic")
Test.assertEquals(pHName(5.5), "acidic")
```

## Use Cases

```
For a solution with a pH value:
const solution = 3;
const solutionPH = pHName (solution);
console.log(solutionPH);    // acidic

For a solution with a pH value:
const solution = 12;
const solutionPH = pHName (solution);
console.log(solutionPH);    // alkaline;

For a solution with a pH value:
const solution = 7;
const solutionPH = pHName (solution);
console.log(solutionPH);    // neutral;

For a solution with a pH value:
const solution = 14.01;
const solutionPH = pHName (solution);
console.log(solutionPH);    // invalid;

For a solution with a pH value:
const solution = -0.1;
const solutionPH = pHName (solution);
console.log(solutionPH);    // invalid;
```

---

---

<!-- copy this section for every solution you study -->

## [mbbentley](https://edabit.com/user/n5wubRfh6zh8QRymN)

```js
const pHName = pH => pH < 0 || pH > 14 ? 'invalid' :
	pH < 7 ? 'acidic' : pH > 7 ? 'alkaline' : 'neutral';
```

### Strategy

```
This problem has four return values in a range of 0 and 14 (all included). mbbentley chose the strategy of looking for the value of the argument between the specific edge values.
```

### Implementation

```
mbbentley wrote a two-line function of his strategy that uses the edge values to get the correct answers. 
He used ternary (?) and logical or (||) operators. 
As ternary and logical operators return values according to the truthy or falsy of conditions/expressions, he didn't need a return statement. 
He first eliminate the out-range values by the logical or operator, then checked for the in-range values. For the in-range values of the argument he used the ternary operator. 
```

### Possible Refactors

```
This strategy could also be implemented with:
    * if else if else statement
    * switch case  
```

### References

```
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
```

---



---

### Remix

```js
function pHName(pH) {
	if (0 <= pH && pH < 7) {
		return 'acidic';
	} else if (7 < pH && pH <= 14) {
		return 'alkaline';
	} else if (pH === 7) {
		return 'neutral';
	} else {
		return 'invalid';
	}
}
```

### Strategy
This problem has four return values in a range of 0 and 14 (all included). I chose the strategy of looking for the value of the argument between the specific edge values.

### Implementation
I wrote a function that uses the edge values to get the correct answers.  
I used "if else if and else statement" and the and (&&) operator to determine the characteristic of the solution. I also used return every time to get the answer according to the parameter. 

### Possible Refactors
This strategy could also be implemented with:
    * ternary operators
    * switch case  

### Inspired By

```
```

### References      
```
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
```
---

## Retrospective

```
Using and (&&), or (||) operators is a good practice to determine the range of possible values. 
Ternary operator is also a good practice to shorten the code.
"switch" method may be a good practice. 
```
