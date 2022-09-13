// 1. Optional Chaining
{
  const person1 = {
    name: 'Ellie',
    job: {
      title: 'S/W Engineer',
      manager: {
        name: 'Bob'
      }
    }
  }

  const person2 = {
    name: 'Bob'
  }

  // bad..
  {
    function printManager(person) {
      console.log(person.job.manager.name);
    }

    printManager(person1);
    // printManager(person2); // error
  }

  // bad..
  {
    function printManager(person) {
      console.log(
        person.job ? person.job.manager ? person.job.manager.name : undefined : undefined
      )
    }

    printManager(person1);
    printManager(person2);
  }

  // bad...
  {
    function printManager(person) {
      console.log(
        person.job && person.job.manager && person.job.manager.name
      )
    }

    printManager(person1);
    printManager(person2);
  }

  // good!
  {
    function printManager(person) {
      console.log(
        person.job?.manager?.name
      )
    }

    printManager(person1);
    printManager(person2);
  }
}

//-------------------------------------------------------

// 2. Nullish Coalescing Operator
// Nullish Coalescing Operator is only for null or undefined.
{
  // Logical OR operator
  // Logical OR operator is only for falsy.
  // false: '', 0, NaN, null, undefined, false
  {
    const name = 'Ellie';
    const userName = name || 'Guest';
    console.log(userName);
  }

  {
    const name = null;
    const userName = name || 'Guest';
    console.log(userName);
  }

  // bad..
  {
    const name = '';
    const userName = name || 'Guest'; // 빈 문자열을 출력하고 싶지만 빈문자열이 false로 간주되어 Guest가 출력된다.
    console.log(userName);

    const num = 0;
    const message = num || 'undefined'; // 숫자 역시 0으로 지정되어 있어도 false로 간주되어 undefined가 출력된다.
    console.log(message);

    function printMessage(text) {
      const message = text || 'Nothing to display';
      console.log(message);
    }

    printMessage('hello');    // hello
    printMessage(null);       // Nothing to display
    printMessage(undefined);  // Nothing to display
    printMessage(0);          // Nothing to display
    printMessage('');         // Nothing to display
    printMessage(false);      // Nothing to display
    printMessage();           // Nothing to display
  }

  // good!
  {
    const name = '';
    const userName = name ?? 'Guest';
    console.log(userName);

    const num = 0;
    const message = num ?? 'undefined';
    console.log(message);

    function printMessage(text) {
      const message = text ?? 'Nothing to display';
      console.log(message);
    }

    printMessage('hello');    // hello
    printMessage(null);       // Nothing to display
    printMessage(undefined);  // Nothing to display
    printMessage(0);          // 0
    printMessage('');         // ''
    printMessage(false);      // false
    printMessage();           // Nothing to display
  }
}