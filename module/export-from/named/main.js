'use strict';

import * as exports from './module.js';
console.log(exports.let1);
console.log(exports.all.let2);

import { all2 } from './module.js';
console.log(all2.let3);
