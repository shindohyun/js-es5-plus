'use strict';

// - generator function: funciton*
// - return: generator object
// - generator object: follows iterator interface (i.e next, return and throw funcitons.)
// generator function은 호출될때 실행되지 않는다.
// 단지 generator object를 생성한다.
// 이 generator object가 next를 호출하면 yield를 만날 때까지 function이 실행된다.
// yield를 만나면 값을 반환한다.
// 다시 next를 호출하면 그 yield 이후 부터 재개된다.

// 예제
{
  function* infiniteSequence() {
    var i = 0;
    while(true) {
      yield i++;
    }
  }

  var iterator = infiniteSequence();
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
}

{
  function* limitedSequence() {
    var i = 0;
    while(i < 3) {
      yield i++;
    }
  }

  var iterator = limitedSequence();
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
}

{
  function* generator() {
    console.log('Execution started');
    yield 0;
    console.log('Execution resumed');
    yield 1;
    console.log('Execution resumed');
  }

  var iterator = generator();
  console.log('Starting iteration');
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
}

// iterator.next(valueToInject): yield 표현식의 결과 값을 제어할 수 있다.
{
  function* generator() {
    const bar = yield 'foo';
    console.log(bar);
  }

  const iterator = generator();
  const foo = iterator.next();
  console.log(foo.value); // foo

  const nextThing = iterator.next('bar1'); // call -> console.log(bar);
}

// iterator.throw(error): yield 표현식 지점에서 예외를 던질 수 있다.
{
  function* generator() {
    try{
      yield 'foo';
      console.log('try done!'); // never called
    } catch(err) {
      console.log(err.message);
      yield 'test';
      console.log('catch done!');
    }
  }

  var iterator = generator();
  var foo = iterator.next();
  console.log(foo);

  var nextThing = iterator.throw(new Error('bar'));
  console.log(nextThing);

  // 한 번 throw를 던지면 실행 포인트가 catch절로 변경된다.
  var done = iterator.next();
  console.log(done);
}