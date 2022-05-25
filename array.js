'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//-------------------------------------------------------

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);

//-------------------------------------------------------

// 3. Looping over an array
// print all fruits
// a. for
console.clear();
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach(function (value, index, array) {
  console.log(value, index, array);
});

fruits.forEach((value, index) => {
  console.log(value, index);
});

fruits.forEach((value) => console.log(value));

//-------------------------------------------------------

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('strawberry', 'peach');
console.log(fruits);

// pop: remove an item from the end
const poped = fruits.pop();
fruits.pop();
console.log(fruits);
console.log(poped);

// unshift: add an item to the beginning
fruits.unshift('strawberry', 'lemon');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push

// splice: remove an item by index position
fruits.push('strawberry', 'peach', 'lemon');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, 'apple', 'watermelon');
console.log(fruits);
fruits.splice(1, 0, 'green apple', 'yellow watermelon'); // just add at the index position
console.log(fruits);

// combine two arrays
const fruits2 = ['orange', 'tomato'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//-------------------------------------------------------

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('watermelon'));
console.log(fruits.indexOf('kokonut'));

// includes
console.log(fruits.includes('watermelon'));
console.log(fruits.includes('kokonut'));

// lastIndexOf
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));
