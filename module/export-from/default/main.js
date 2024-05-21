'use strict';

import * as all from './module1.js';
console.log(all.default); // undefined. default 값은 가져오지 못함
console.log(all.let2);
console.log(all.let3);

import { exports } from './module2.js';
console.log(exports.default);
console.log(exports.let2);
console.log(exports.let3);

import * as all2 from './module3.js';
console.log(all2.default);
console.log(all2.let2);
console.log(all2.let3); // undefined

import * as all3 from './module4.js';
console.log(all3.renamedDefault);
console.log(all3.let2);
console.log(all3.let3);
