// 1. null vs undefined
// undefined: 무언가 초기화되지 않았다.
// null: 무언가를 초기화한 후 의도적으로 null을 할당했다.
console.log(null == undefined); // true
console.log(null === undefined); // false

// 2. 비교할때는 항상 ===, !== 를 사용하자
// null 체크 할때는 동등연산자(==, !=) 사용해도 된다.

// 3. 참조 비교는 주소값을 비교한다.
{
  class MyClass {
    constructor(data){
      this.data = data;
    }
  };

  const myClass1 = new MyClass('data');
  const myClass2 = myClass1;
  const myClass3 = new MyClass('data');

  console.log(myClass1 == myClass2); // true
  console.log(myClass1 === myClass2); // true

  console.log(myClass1 == myClass3); // false
  console.log(myClass1 === myClass3); // false
}

// 4. 전역변수의 존재여부를 검사할때는 typeof를 사용하자
// 선언되지 않은 변수는 ReferenceError를 발생 시킨다.
// 이때 typeof를 사용하면 선언되지 않은 변수는 undefined를 내보낸다.
// 이를 활용하여 전역변수의 존재 유무를 파악할 수 있다.

// bad...
// ReferenceError: b is not defined
// if(b != null) {
//   console.log('b is safe');
// }

// good!
if(typeof b !== 'undefined') {
  console.log('b is safe');
} else {
  console.log('b is not safe');
}

// 5. undefined는 명시적으로 사용하지 않는다.
{
  function foo(p) {
    if(p > 0) {
      return {a: 1, b: 2};
    } else {
      // return {a: 1, b: undefined}; // bad...
      return {a: 1}; // good!
    }
  }
}

// 6. undefined를 유효성을 나타내는 수단으로 사용하지 않는다.
{
  // bad...
  function toInt1(str) {
    return str ? parseInt(str) : undefined;
  }
  
  console.log(toInt1('1'));
  console.log(toInt1('test'));
  console.log(toInt1());

  // good!
  function toInt2(str) {
    const int = parseInt(str);
    if(isNaN(int)) {
      return { valid: false };
    } else {
      return { valid: true, int};
    }
  }
  console.log(toInt2('1'));
  console.log(toInt2('test'));
  console.log(toInt2());
}

// 7. JSON의 serialization은 null값을 지원하지만 undefined는 지원하지 않는다.
{
  const obj = {
    a: undefined,
    b: null,
    c: 'test'
  }

  console.log(JSON.stringify(obj));
}

/**
 * [참고] 가능한 null을 사용하지 않고 undefined만을 사용해야한다는 주장이 있다.
 * 하지만 Node 스타일의 코드는 많은 경우에 null을 매개변수로 넘기고 있어 코드 스타일은 선택이다.
 * 내가 작성하는 코드에서 null의 사용을 피하기로 한다.
 * 
 * <주장의 근거>
 * 1. 자바스크립트 엔진은 기본적으로 null을 사용하지 않고 undefined를 사용한다.
 * 2. typeof null은 object이다. (typeof undefined는 undefined이다.)
 * 
 * <undefined만 사용했을때 발생하는 문제점과 해결방법>
 * 1. DOM API는 null을 사용한다.
 * => null을 undefined로 바꿔줘야한다.
 * ex) const element = document.querySelector('#something') || undefined;
 * 
 * 2. JSON에서 undefined를 지원하지 않는다.
 * => JSON에서 없는 값을 표현하기 위해 null을 사용하는데, 없는 값이라면 아예 전달하지 않으면 된다.
 */

// TODO: 클로저