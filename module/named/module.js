'use strict';

// 1. 변수
export var var1 = '안녕';
export let let1 = '나는';
export const const1 = '신도현이야';

// 2. 함수
export function func1() {
  console.log(var1, let1, const1);
}

// 3. 클래스
export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hello! My name is ${this.name} and I'm ${this.age}y.o`);
  }
}

// 4. 객체
let obj = {
  key1: 'value1',
  key2: 'value2',
};
export { obj };

// 5. 객체 비구조화로 내보내기
export const { key1, key2: key3 } = obj;

// 6. 목록으로 내보내기
const A = 'A';
const B = 'B';
const C = 'C';
export { A, B, C };

// 7. 이름 바꿔서 내보내기
const fruit1 = '사과';
const fruit2 = '배';
const fruit3 = '딸기';
export { fruit1 as apple, fruit2 as pear, fruit3 as strawberry };
