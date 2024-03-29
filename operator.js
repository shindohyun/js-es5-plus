'use strict';

// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 
''''
1 + 2 = ${1+2}`);
console.log('ellie\'s \n\tbook');
console.log("ellie's \n\tbook");

//-------------------------------------------------------

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

//-------------------------------------------------------

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

//-------------------------------------------------------

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

//-------------------------------------------------------

// 5. Comparison operators

//-------------------------------------------------------

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
// tip. 시간이 오래 걸리는 메소드는 가장 마지막에 위치시킨다.
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// if(nullableObject != null) {
//   nullableObject.something;
// }
// => nullableObject && nullableObject.something

function check() {
    for(let i = 0; i < 10; i++){
        // wasting time
    }

    return true;
}

// ! (not)
console.log(!value1);

//-------------------------------------------------------

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// 주의!
console.log(null == undefined); // true
console.log(null === undefined); // false

//-------------------------------------------------------

// 8. Conditional operators: if
// if, else if, else

//-------------------------------------------------------

// 9. Ternary operator: ?
// condition ? value1 : value2;
const name = 'ellie';
console.log(name === 'ellie' ? 'yes' : 'no');

//-------------------------------------------------------

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS

//-------------------------------------------------------

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while( i > 0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
}while(i > 0);

// for loop, for(begin; condition; step)
for( i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for(let i = 3; i > 0; i = i - 2){
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}
