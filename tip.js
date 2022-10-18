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

// 8. Closure
// 클로저란? 자신이 생성될 때의 환경을 기억하는 함수
{
  // 예제.
  function outerFunction(arg) {
    var x = arg;
    return function() {
      console.log(x);
    }
  }

  var innerFunction = outerFunction('hello');
  innerFunction(); // Closure

  // 활용.
  function createCounter() {
    let val = 0;
    return {
      increment() {
        val ++;
      },
      getVal() {
        return val;
      }
    }
  }

  let counter = createCounter();
  counter.increment();
  console.log(counter.getVal());
  counter.increment();
  console.log(counter.getVal());
}

// 9. Number의 범위
{
  // 표현 가능한 가장 큰 양수
  console.log(Number.MAX_VALUE);

  // Number.MAX_VALUE를 넘어서도 MAX_VALUE 값으로 제한되다가 어느 시점 부터 Infinity 변경된다.
  console.log(Number.MAX_VALUE + 1000) // == Number.MAX_VALUE
  console.log(Number.MAX_VALUE * 1000) // Infinity

  // 표현 가능한 가장 작은 양수 (0에 가장 가까운 숫자)
  console.log(Number.MIN_VALUE);

  // 표현 가능한 숫자 범위
  console.log(`${Number.MAX_VALUE} ~ ${-Number.MAX_VALUE}`);

  // 정수의 범위
  console.log(`${Number.MAX_SAFE_INTEGER} ~ ${Number.MIN_SAFE_INTEGER}`); 

  // 정수의 범위를 넘어가는 경우 비교 불가
  console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2) // true!
  console.log(Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2) // true!
  console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
  console.log(Number.MAX_SAFE_INTEGER + 1) // 9007199254740992 - Correct
  console.log(Number.MAX_SAFE_INTEGER + 2) // 9007199254740992 - Rounded!
  console.log(Number.MAX_SAFE_INTEGER + 3) // 9007199254740994 - Rounded - correct by luck
  console.log(Number.MAX_SAFE_INTEGER + 4) // 9007199254740996 - Rounded!

  // Number.isSafeInteger 함수는 안전한 정수인지 검사한다.
  console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)) // true
  console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)) // false
  console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 10)) // false
}

// 10. Number의 한계
{
  console.log(0.1+0.2); // 0.30000000000000004
}

// 11. NaN 를 확인하고 싶을때는 Number.isNaN을 사용
{
  var i = 'hello'/2;
  console.log(i); // NaN
  console.log(NaN === i) // false!!
  console.log(Number.isNaN(i)); // true
}

// 12. !! 패턴
// 1) !는 변수를 반전된 boolean 값으로 전환한다.
// 2) '', 0, NaN, null, undefined, false 는 false 임을 안다.
{
  var a = '';
  var a_is = !a; // true (a의 반전된 boolean 값)
  console.log(`${a_is}(${typeof a_is})`);
  a_is = !a_is; // false (a의 원래 boolean 값)
  console.log(`${a_is}(${typeof a_is})`);

  // 이를 한번에 표현하면
  var b = '';
  var b_is = !!b;
  console.log(`${b_is}(${typeof b_is})`);

  // 활용
  const name = '';
  const hasName = !!name;
  console.log(hasName);
}