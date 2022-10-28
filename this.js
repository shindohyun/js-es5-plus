// *호출 한 객체가 this
{
  function func1() {
    console.log(this);
  }

  func1();  // this == window
}

{
  const func1 = function() {
    console.log(this);
  }

  func1(); // this == window
}

{
  const user = {
    name: 'dohyun',
    func1: function() {
      console.log(this);
    }
  }

  user.func1(); // this == user

  const func2 = user.func1;
  func2(); // this == window
}

{
  class User {
    constructor(name){
      this.name = name;
    }

    func1() {
      console.log(this);
    }
  }

  const user = new User('dohyun');
  user.func1(); // this == user
}

{
  class Button {
    constructor(id) {
      this.id = id;
    }
    addClickListener(callback) {
      this.callback = callback;
    }
    onClick() {
      this.callback();
    }
  }

  let saveBtn;

  class User {
    constructor(name){
      this.name = name;
    }

    func1() {
      console.log(this);

      saveBtn = new Button("saveBtn");
      saveBtn.addClickListener(function() {
        console.log(this); // this == Button(saveBtn)
      });
    }
  }

  const user = new User('dohyun');
  user.func1(); // this == user
  saveBtn.onClick();
}

//-------------------------------------------------------

// 화살표함수에서 this를 사용하는 경우
// 화살표함수에는 this가 존재하지 않는다.
// 따라서 *상위의 this를 찾아 사용한다.
// * this와 관련하여 화살표 함수의 주의사항: 호출한 컨텍스트가 this가 되게 하려면 화살표함수를 사용해서는 안된다.
{
  class Button {
    constructor(id) {
      this.id = id;
    }
    addClickListener(callback) {
      this.callback = callback;
    }
    onClick() {
      this.callback();
    }
  }

  let saveBtn;

  class User {
    constructor(name){
      this.name = name;
    }

    func1() {
      console.log(this);

      saveBtn = new Button("saveBtn");
      saveBtn.addClickListener(() => {
        console.log(this); // this == user (*상위인 func1의 this를 참조한다.)
      });
    }
  }

  const user = new User('dohyun');
  user.func1(); // this == user
  saveBtn.onClick();
}
{
  const MyClass = function(x, y) {
    this.x = x;
    this.y = y;
    this.point = function() {
      console.log(x, y);
    };
  }
  
  const myClass = new MyClass(1, 2);
  myClass.point();
  
  const MyClass2 = (x, y) => {
    this.x = x;
    this.y = y;
    this.point = function() {
      console.log(x, y);
    };
  }
  
  // const myClass2 = new MyClass2(1, 2); // error
  // myClass2.point();
}

//-------------------------------------------------------

// 예제: 
{
  function Person1(name) {
    this.name = name;
    this.printName = function() {
      console.log(this.name);
    };
  }

  let person1 = new Person1('dohyun');
  setTimeout(person1.printName, 1000); // 매개변수로 함수를 넘겨주기 때문에 내부에서 printName()를 호출한 객체는 this가 된다.
  
  // 화살표함수로 문제를 해결할 수 있다.
  function Person2(name) {
    this.name = name;
    this.printName = () => {
      console.log(this.name);
    };
  }

  let person2 = new Person2('dohyun');
  setTimeout(person2.printName, 1000);
}

// 예제: 상속과 오버라이드
{
  class Adder {
    constructor(a) {
      this.a = a;
    }
    add = (b) => {
        return this.a + b
    }
  }
  
  class Child1 extends Adder {
    callAdd(b) {
        return this.add(b);
    }
  }

  // class Child2 extends Adder {
  //   add = (b)=> {
  //       return this.add(b); // stack overflow
  //   }
  //
  //   add = function(b) {
  //     return this.add(b); // stack overflow too.
  //   }
  // }

  class Child2 extends Adder {
    superAdd = this.add; // 부모의 함수를 포획하여 해결
    add = (b) => {
        return this.superAdd(b);
    }
  }
  
  const child1 = new Child1(123);
  const child2 = new Child2(123);
  console.log(child1.add(123)) // 246
  console.log(child2.add(123)) // 246
}

// 예제: this를 사용하는 라이브러리에서 주변 컨텍스트에 접근하는 방법
{
  let _self = this // this를 포획하여 해결
  let arr = ['a', 'b', 'c', 'd'];

  $.each(arr, function() {
    console.log(_self);
    console.log(this);
  });
}