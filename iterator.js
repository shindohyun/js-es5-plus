'use strict';

// Iterator 사용법
{
  let a = [1,2,3];

  let it = a[Symbol.iterator]();
  
  let item = it.next();
  while(!item.done) {
    console.log(item.value, item);
    item = it.next();
  }

  let it2 = a[Symbol.iterator]();
  for(let item of it2) {
    console.log(item);
  }
}

// Iterator 만들기
{
  class Item {
    constructor(value) {
      this.value = value;
    }
  }

  class makeIterator{
    index = 0;
  
    constructor(arr) {
      this.arr = arr;
    }
  
    next() {
        if (this.index < this.arr.length) {
            return {
                done: false,
                value: this.arr[this.index++]
            }
        } else {
            return {
                done: true,
                value: null
            }
        }
    }
  }
  
  let arr = [
    new Item('top'),
    new Item('bottom'),
    new Item('left'),
    new Item('right')
  ];

  let it = new makeIterator(arr);

  let item = it.next();
  while(!item.done) {
    console.log(item.value.value, item.value);
    item = it.next();
  }

  // iterable한 객체가 아니기 때문에 for-of 문을 사용할 수 없다.
  let it2 = new makeIterator(arr);
  for(let item of it2) {
    console.log(item);
  }
}
