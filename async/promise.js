'use strict'

// Promise is a JavaScript object for asynchronous operation.
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// new Promise(executor callback)
// executor callback(resolve callback, reject callback)
// * when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie'); // => then
    // reject(new Error('no network')); // => catch
  }, 2000);
});

//-------------------------------------------------------

// 2. Consumers: then, catch, finally
promise
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });

//-------------------------------------------------------

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

// then은 값을 전달해도 되고 또 다른 Promise를 전달해도 된다.
fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    })
  })
  .then(num => console.log(num));

//-------------------------------------------------------

// 4. Error Handling
const getHen = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve('hen'), 1000);
});

const getEgg = hen => new Promise((resolve, reject) => {
  // setTimeout(() => resolve(`${hen} => egg`), 1000);
  setTimeout(() => reject(`error! ${hen} => egg`), 1000);
});

const cook = egg => new Promise((resolve, reject) => {
  setTimeout(() => resolve(`${egg} => fried egg`), 1000);
});

getHen()
  .then(getEgg)
  .catch(error => { // 다음으로 넘어가기 전에 error를 제어하고 싶다면 중간에 삽입한다.
    return 'bread';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
  // .then(hen => getEgg(hen))
  // .then(egg => cook(egg))
  // .then(meal => console.log(meal))
  // .catch(error => console.log(error));
