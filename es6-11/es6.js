// 1. Shorthand property names
{
  const ellie1 = {
    name: 'Ellie',
    age: '18'
  };

  const name = 'Ellie';
  const age = '18';

  // bad..
  const ellie2 = {
    name: name,
    age: age
  };

  // good!
  const ellie3 = {
    name, 
    age
  }

  console.log(ellie1, ellie2, ellie3);
}

//-------------------------------------------------------

// 2. Destructuring Assginment
// Tip: 구조에 맞게 받아내면 된다.
{
  // Object
  {
    const student = {
      name: 'Anna',
      level: 1
    };
  
    // bad..
    {
      const name = student.name;
      const level = student.level;
      console.log(name, level);
    }
  
    // good!
    {
      const {name, level} = student;
      console.log(name, level);
  
      const {name: studentName, level: studentLevel} = student; // Object에 사용할때는 중괄호{} 사용
      console.log(studentName, studentLevel);
    }
  }

  // 새로운 변수에 담기
  {
    const student = {
      name: 'Anna',
      level: 1
    };

    const {'name': newName, 'level': newLevel} = student;
    console.log(newName, newLevel);
  }

  // 깊은 데이터 구조
  {
    const foo = {
      bar: {
        bas: 123
      }
    }
  
    const foo1 = foo;
    console.log(foo1);
    console.log(foo1.bar);
    console.log(foo1.bar.bas);
  
    const {bar} = foo;
    console.log(bar);
    console.log(bar.bas);
  
    const {bar: {bas}} = foo;
    console.log(bas);
  
  }
  
  // 나머지 객체
  {
    const {w, x, ...remaining} = {w:1, x:2, y:3, z:4};
    console.log(w, x, remaining);
  
    const {...remainingAll} = {w:1, x:2, y:3, z:4};
    console.log(remainingAll);
  
    const {z, ...remainingPre} = {w:1, x:2, y:3, z:4};
    console.log(z, remainingPre); // 4, [1,2,3] => 키에 맞게 값이 할당됨
  }

  // Array
  {
    const animals = ['doc', 'cat'];

    // bad..
    {
      const first = animals[0];
      const second = animals[1];
      console.log(first, second);
    }

    // good!
    const [first, second] = animals; // Array에 사용할때에는 대괄호[] 사용
    console.log(first, second);
  }

  // 스왑
  {
    var x=1, y=2;
    var [x, y] = [y, x];
    console.log(x, y);
  }

  // 나머지 배열
  {
    var [x, y, ...remaining] = [1,2,3,4];
    console.log(x, y, remaining);

    var x=1, y=2, z=3, h=4;
    var [z, ...remaining] = [x,y,z,h];
    console.log(z, remaining); // 1, [2,3,4] => 변수명이 키가 아니기 때문에 그냥 '순서대로' 할당됨
  }

  // 값 무시하기
  {
    var [, x, ...remaining] = [1,2,3,4];
    console.log(x, remaining);
  }
}

//-------------------------------------------------------

// 3. Spread Syntax
{
  const obj1 = {key: 'key1'};
  const obj2 = {key: 'key2'};
  const array = [obj1, obj2];

  // array copy
  const arrayCopy = [...array]; // Array를 복사할때에는 대괄호[] 사용
  console.log(array, arrayCopy);

  const arrayCopy2 = [...array, {key: 'key3'}]; // 복사와 함께 데이터 추가
  // 주의! array에는 obj1, obj2의 주소값이 들어있고 
  // 이 주소값을 arrayCopy, arrayCopy2에 복사했기 때문에 
  // obj1의 데이터를 변경하면 array, arrayCopy, arrayCopy2 모두 영향에 미친다.
  obj1.key = 'newKey';
  console.log(array, arrayCopy, arrayCopy2);

  const arrayCopy3 = [{key: 'key3'}, ...array]; // 맨 앞에 추가하기
  console.log(arrayCopy3);

  // object copy
  const obj3 = {...obj1}; // Object를 복사할때에는 중괄호{} 사용
  console.log(obj1, obj3);

  // array concatenation
  const fruits1 = ['orange', 'tomato'];
  const fruits2 = ['banana', 'apple'];
  const fruits = [...fruits1, ...fruits2];
  console.log(fruits);

  // object merge
  const dog1 = {dog1: 'gray dog'};
  const dog2 = {dog2: 'brown dog'};
  const dog = {...dog1, ...dog2};
  console.log(dog);

  const dog3 = {dog1: 'blue dog'};
  const dog4 = {...dog1, ...dog3}; // 주의! key가 동일한 경우 뒤에 있는 object의 값으로 덮어씌운다.
  console.log(dog4);
}

//-------------------------------------------------------

// 4. Default parameters
// Default parameter is only for undefined
// bad..
{
  function printMessage(message) {
    if(message == null) {
      message = 'default message';
    }

    console.log(message);
  }

  printMessage('hello');
  printMessage();
}

// good!
{
  function printMessage(message = 'default message') {
    console.log(message);
  }

  printMessage('hello');    // hello
  printMessage();           // default message
  printMessage(undefined);  // default message
  printMessage(false);      // false
  printMessage('');         // ''
  printMessage(0);          // 0
  printMessage(null);       // null
}

//-------------------------------------------------------

// 5. Ternary Operator
{
  const isCat = true;

  // bad..
  {
    let component;
    if(isCat) {
      component = 'cat';
    } else {
      component = 'dog';
    }
    console.log(component);
  }

  // good!
  const component = isCat ? 'cat' : 'dog';
  console.log(component);
  console.log(isCat ? 'cat' : 'dog');
}

//-------------------------------------------------------

// 6. Template Literals
{
  const weather = 'sun';
  const temparature = '16';

  // bad..
  console.log(
    'Today weather is ' + weather + ' and temparature is ' + temparature
  );

  // good!
  console.log(`Today weather is ${weather} and temparature is ${temparature}`);
}
