'use strict';

// 1. 멤버 이름으로 가져오기
import { var1, let1, const1 } from './module.js';
console.log(var1, let1, const1);

// 주의) 모듈에서 가져온 변수는 변경 불가
// var1 = 'test'; // error
// let1 = 'test'; // error

// 2. 이름 바꿔서 가져오기
import { func1 as introduce } from './module.js';
introduce();

// 3. 전체 모듈 가져오기
import * as exports from './module.js';
let dohyun = new exports.Person('dohyun', 32);
dohyun.introduce();

// 4. 객체 멤버 가져오기
import { obj } from './module.js';
obj.key1 = 'newValue1';
console.log(obj);

// 5. 객체 비구조화 내보내기 테스트
import { key1, key3 } from './module.js';
console.log(key1, key3);

// 6. 목록으로 내보내기 테스트
import { A, B, C } from './module.js';
console.log(A, B, C);

// 7. 이름 바꿔서 내보내기 테스트
import { apple, pear, strawberry } from './module.js';
console.log(apple, pear, strawberry);
