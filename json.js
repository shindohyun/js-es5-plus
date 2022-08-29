// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  //symbol: Symbol(""),   // 자바스크립트에만 있는 특별한 데이터는 JSON에 포함되지 않는다.
  jump: function() {      // 함수는 데이터가 아니기 때문에 JSON에 포함되지 않는다.
    console.log(`${this.name} can jump!`);
  }
};

json = JSON.stringify(rabbit);
console.log(json);

// JSON으로 변환하고 싶은 프로퍼티만 선택할 수 있다.
json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);

// JSON으로 변환하려는 데이터를 조작할 수 있다.
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  // return value;
  return key === 'name' ? 'ellie' : value;
});
console.log(json);

//-------------------------------------------------------

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
let obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump(); // error. JSON으로 변환될때 함수를 포함하지 않기 때문에

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); // error. JSON으로 변환될때 Date 객체는 문자열 형태로 변환되기 때문에

// Object로 변환할때 데이터를 조작할 수 있다.
obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  // return value;
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj.birthDate.getDate());