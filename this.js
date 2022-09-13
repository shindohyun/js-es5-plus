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
