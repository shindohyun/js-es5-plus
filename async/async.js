// async & await
// clear style of using promise

// async와 await은 Promise를 감싸고 있다.

// 1. async
/* using promise
function fetchUser() {
  return new Promise((resolve, reject) => {
    // do network request in 10 secs...
    return resolve('ellie');
  });
}
*/
async function fetchUser() {
  // do network request in 10 secs...
  return 'ellie'; // => then
  // throw 'error!'; // => catch
  // throw new Error('error!'); // => catch
}

const user = fetchUser(); // Promise
user.then(console.log).catch(console.log);
console.log(user);

//-------------------------------------------------------

// 2. await
// await은 async가 붙은 함수 안에서만 사용할 수 있다.
function delay(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
  // return new Promise((resolve, reject) => setTimeout(reject('error!!'), ms));
}

async function getApple() {
  await delay(3000);
  return 'apple';
}

async function getBanana() {
  await delay(1000);
  return 'banana';
}

// async, await을 사용하지 않는다면 아래 코드와 같다.
// async, await을 사용하면 아래 코드 처럼 chaining을 사용하지 않고 
// 동기적인 코드 처럼 보이도록 작성할 수 있다.
/* 
function getBanana() {
  return delay(3000)
  .then(()=>'banana');
}
*/

/* using promise
function pickFruits() {
  return getApple().then(apple => {
    return getBanana().then(banana => `${apple} + ${banana}`);
  });
}
*/

async function pickFruits() {
  try{
    // 아래 코드는 getApple 3초 기다린 후 getBanana가 실행된다.
    /*
    const apple = await getApple();
    const banana = await getBanana();
    */
   
    // 위 문제를 해결하기 위한 방법1. (지저분한 방법)
    // Promise를 생성하면 바로 실행되는 특징을 이용하여 병렬 처리
    const applePromise = getApple();    // 바로 실행
    const bananaPromise = getBanana();  // 바로 실행
    const apple = await applePromise;
    const banana = await bananaPromise;

    // 위 문제를 해결하기 위한 방법2. (권고)
    // Promise에서 제공해주는 API를 활용한다.

    return `${apple} + ${banana}`;
  } catch(error) {
    console.log(error);
  }
}

pickFruits()
  .then(console.log)

//-------------------------------------------------------

// 3. useful Promise APIs
function pickAllFruits() {
  // 배열로 넘겨준 모든 Promise들을 병렬적으로 실행한다.
  // 실행 완료 후 모든 Promise의 결과를 배열로 담아서 보내준다.
  return Promise.all([getApple(), getBanana()])
  .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  // 먼저 완료되는 결과만 받는다.
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);