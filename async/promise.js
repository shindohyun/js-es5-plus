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

// 모든 동기 오류는 가장 가까운 catch로 제어된다.
Promise.resolve(123)
  .then((res) => {
      throw new Error('something bad happened'); // throw a synchronous error
  })
  .catch((err) => {
    console.log(`catch1: ${err.message}`); // something bad happened
    return 456;
  })
  .then((res) => {
      console.log(res); // 456
      return Promise.resolve(789);
  })
  .catch((err) => {
      console.log(`catch2: ${err.message}`); // never called
  });

//-------------------------------------------------------

// 5. 병렬처리
// Promise.all(): n개의 Promise가 모두 완료될 때까지 기다린다.
{
  // 예제1
  {
    function loadItem(id){
      return new Promise((resolve) => {
        console.log('loading item', id);
        setTimeout(() => {
          resolve({ id: id });
        }, 1000);
      });
    }
  
    // Chained / Sequential
    let item1, item2;
  
    loadItem(1)
      .then((res) => {
        item1 = res;
        return loadItem(2);
      })
      .then((res) => {
        item2 = res;
        console.log('done');
      }); // overall time will be around 2s
  
    // Concurrent / Parallel
    Promise.all([loadItem(1), loadItem(2)])
      .then((res) => {
        [item1, item2] = res;
        console.log('done');
      }); // overall time will be around 1s
  }

  // 예제2: 중간에 하나라도 reject되면 종료된다.
  {
    function loadItem(id){
      return new Promise((resolve) => {
        console.log('loading item', id);
        setTimeout(() => {
          resolve({ id: id });
        }, 10000);
      });
    }

    function loadFailItem(id){
      return new Promise((resolve, reject) => {
        console.log('loading fail item', id);
        setTimeout(() => {
          reject(new Error('loading fail item error!'));
        }, 1000);
      });
    }

    Promise.all([loadItem(1), loadItem(2), loadFailItem(3)])
    .then((res) => {
      [item1, item2] = res;
      console.log('done'); // never called
    })
    .catch((err) => {
      console.log(err);
    });
  }
}

// Promise.race(): n개 중 하나라도 완료될 때까지 기다린다.
{
  // 예제1
  {
    var task1 = new Promise(function(resolve, reject) {
      setTimeout(resolve, 1000, 'one');
    });
    var task2 = new Promise(function(resolve, reject) {
      setTimeout(resolve, 10000, 'two');
    });
  
    Promise.race([task1, task2])
      .then(function(value) {
        console.log(value); // "one"
        // Both resolve, but task1 resolves faster
      });
  }

  // 예제2: 중간에 하나라도 reject되면 종료된다.
  {
    var task1 = new Promise(function(resolve, reject) {
      setTimeout(reject, 1000, new Error('error!'));
    });
    var task2 = new Promise(function(resolve, reject) {
      setTimeout(resolve, 10000, 'two');
    });
  
    Promise.race([task1, task2])
      .then(function(value) {
        console.log(value); // never called
      })
      .catch(err => {
        console.log(err);
      });
  }
}