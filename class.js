'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// Person Class를 함수로 만들면 다음과 같다.
var Person2 = function(name, age) {
  this.name = name;
  this.age = age;
  this.speak = function() {
    console.log(`${this.name}: hello!`);
  }
}

// speak 함수를 다음과 같이 추가할 수도 있다.
// Person2.prototype.speak = function() {
//   console.log(`${this.name}: hello!`);
// }

const dohyun = new Person2('dohyun', 30);
console.log(dohyun.name);
console.log(dohyun.age);
dohyun.speak();

//-------------------------------------------------------

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    // 현재 User는 firstName, lastName, _age 세 개의 필드를 갖는다.
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age; // call age setter
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if(value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age); // call age getter

//-------------------------------------------------------

// 3. Fields (public, private, protected)
// Too soon!
class Experiment {
  publicField = 2;
  #privateField = 0;
  _protectedField = 3; // 개발자들 사이의 암묵적인 약속 (주의: 자바스크립트 문법은 아니다.)
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);
console.log(experiment._protectedField);

//-------------------------------------------------------

// 4. Static properties and methods
// 클래스 인스턴스에서는 정적 속성에 직접 액세스할 수 없습니다.
// Too soon!
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher);
// article1.printPublisher(); // error
Article.printPublisher();

Article.publisher = 'Dream Coder';
Article.printPublisher();

//-------------------------------------------------------

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {

}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log('red triangle');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// constructor override 
class Rectangle2 extends Shape {
  constructor(width, height, color, radius) {
    super(width, height, color);
    this.radius = radius;
  }
}

const rectangle2 = new Rectangle2(40, 40, 'green', 20);
console.log(rectangle2);

//-------------------------------------------------------

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
console.log(triangle.toString());