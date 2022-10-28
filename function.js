'use strict';

// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function log(message) {
    console.log(message);
}

log('Hello');

//-------------------------------------------------------

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}

const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);

//-------------------------------------------------------

// 3. Default parameters (added in ES6)
// Default parameter is only for undefined
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}

showMessage('Hi!');

//-------------------------------------------------------

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args) {
      console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}

printAll('dream', 'coding', 'ellie');

//-------------------------------------------------------

// 5. Local Scope
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  // console.log(childMessage); // error
  // return undefined; // 아무것도 반환하지 않는 경우 undefined 반환
}
printMessage();

//-------------------------------------------------------

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

//-------------------------------------------------------

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if(user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if(user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

//-------------------------------------------------------

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
// function expression
// print(); // error
const print = function() { // anonymous function
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// function declaration
print2();
function print2() {
  console.log('print2');
};

//-------------------------------------------------------

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if(answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log('no!');
  // print();
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//-------------------------------------------------------

// Arrow function
// always anonymous
const simplePrint1 = function () {
  console.log('simplePrint!');
};

const simplePrint2 = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// Arrow function에 없는것들 
// 1. 함수이름(always anonymous)
// 2. this(* this.js 참고)
// 3. arguments
{
  const myFunc = function() {
    console.log(arguments);
  }

  myFunc(1,2,3,4);

  const myFunc2 = () => {
    console.log(arguments);
  }

  // myFunc2(1,2,3,4); // error: arguments is not defined
}

{
  function outter() {
    const myFunc = () => {
      console.log(arguments); // function outter의 arguments
    }
    myFunc();
  }

  outter(1,2,3,4);
}

// 객체 리턴하기
{
  var foo1 = () => {
    bar: 123
  }
  console.log(foo1()); // undefined

  var foo2 = () => ({
    bar: 123
  });
  console.log(foo2());
}

//-------------------------------------------------------

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log('IIFE');
})();

// Arrow function 버전
(()=>{
  console.log('IIFE Arrow function version');
})();

// parameter
(function hello(name) {
  console.log(`hello, ${name}!`);
})('dohyun');

// 활용1. 초기화
{
  let isAdult;

  (function init(age) {
    if(age >= 20) {
      isAdult = true;
    } else {
      isAdult = false;
    }
  })(15);

  console.log(isAdult);
}

// 활용2. 모듈
{
  const Counter = (function () {
    let current = 0;
    return {
        getCurrentValue: function () {
            return current;
        },
        increaseValue: function () {
            current = current + 1;
            return current;
        },
        decreaseValue: function () {
            current = current - 1;
            return current;
        }
    };
  })();

  console.log(Counter.getCurrentValue()); // 0
  console.log(Counter.increaseValue()); // 1
  console.log(Counter.decreaseValue()); // 0
}