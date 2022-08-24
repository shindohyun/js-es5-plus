// 1. Use strict
// added in ES 5
// use this for Vanilla Javascript
'use strict';

//-------------------------------------------------------

// 2. Variable, rw(read/write)
// let (added in ES6)
let global = 'global';

{ // Block Scope
    let local = 'local';

    console.log(local);
    console.log(global);
}

// console.log(local); // error
console.log(global);

// var (don't ever use this!)
// hoisting (move declaration from bottom to top)
// has no block scope

//-------------------------------------------------------

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS

// favor immutable data type always for a few reason:
//  - security
//  - thread safety
//  - reduce human mistakes

//-------------------------------------------------------

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

// 메모리 저장 방식 차이
//  - primitive type: 메모리에 값을 저장
//  - object: 메모리에 주소를 저장
// object를 const로 선언해도 object 내부의 값은 변경 가능
const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN (Not a Number)
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, tpye: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
// typeof null === 'object'
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefained
let x; // or [let x = undefined;]
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false: 주어진 값이 같아도 다른 심볼

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true: Symbol.for()을 사용하면 주어진 값이 같으면 같은 심볼

// console.log(`value: ${symbol1}, type: ${typeof symbol1}`); // error
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;

//-------------------------------------------------------

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = 7 + '5';
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);