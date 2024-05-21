'use strict';

// 1. default export는 아무 이름으로 가져올 수 있다.
import anyName from './module1.js';
console.log(anyName);

// 2. named export와 함께 가져오기1
import defaultExport, { let2, last } from './module1.js';
console.log(defaultExport, let2, last);

// 3. named export와 함께 가져오기2
import defaultExport2, * as noneDefaultExports from './module1.js';
console.log(defaultExport2, noneDefaultExports.let2);

// 4. named export와 함께 가져오기3
import * as exports from './module1.js';
console.log(exports.default, exports.last);

import defaultFunc from './module2.js';
defaultFunc();
