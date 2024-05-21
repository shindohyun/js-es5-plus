'use strict';

async function callModule() {
  let obj = await import('./module.js');
  obj.default();
  obj.hi();
  obj.bye();
}

function callModule2() {
  import('./module.js')
    .then((obj) => {
      obj.hi();
      obj.bye();
      obj.default();
      obj.foo(); // error
    })
    .catch((err) => {
      console.log(err);
    });
}

function test() {
  callModule();
}
test();

function test2() {
  callModule2();
}
test2();
