// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join('|');
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',');
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array); // 자신도 역순으로 정렬된다.
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];

  // Array.splice: 배열에서 요소를 삭제한다. 삭제된 요소를 반환한다.
  const result = array.splice(0, 2);
  console.log(result); // [1, 2]
  console.log(array); // [3, 4, 5]

  // Array.slice: 배열의 특정한 부분을 반환한다.
  const array2 = [1, 2, 3, 4, 5];
  const result2 = array2.slice(2, 5);
  console.log(result2); // [3, 4, 5]
  console.log(array2); // [1, 2, 3, 4, 5]
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student, index, obj) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student, index, array) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student, index, array) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  // Array.some: 배열 중에 조건을 만족하는 요소가 하나라도 있는지 검사
  const result = students.some((student, index, array) => student.score < 50);
  console.log(result);
  
  // OR

  // Array.every: 배열의 모든 요소가 조건을 만족하는지 검사
  const result2 = !students.every((student, index, array) => student >= 50);
  console.log(result2);
}

// Q9. compute students' average score
{
  // Array.reduce: callback function의 반환값은 다음 회차에 previousValue로 전달된다.
  // initialValue을 지정하지 않는 경우: 두 번째 회차 부터 시작 (currentValue가 배열의 두 번째 요소, prevValue가 배열의 첫 번째 요소)
  // initialValue을 지정하는 경우: 첫 번째 회차 부터 시작 (currentValue가 배열의 첫 번째 요소, previousValue에 initialValue가 전달됨)
  const result = students.reduce(function(prevValue, currValue, currIndex, array) {
    // console.log(prevValue, currValue, currIndex);
    const sum = prevValue + currValue.score;
    console.log(`${prevValue} + ${currValue.score} = ${sum}`);
    return sum;
  }, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
  .map(student => student.score)
  .filter(score => score >= 50)
  .join();

  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  // Array.sort: 음수값이 반환되면 a가 b보다 작다고 판단하여 정렬
  // 인자 a, b를 생략하는 경우 ASCII 문자 오름차순으로 정렬
  const result = students
  .map(student => student.score);

  console.log(result.join());
  console.log(result.sort((a, b) => a - b).join()); // 오름차순
  console.log(result.sort((a, b) => b - a).join()); // 내림차순
}

// Q11. 배열 중복 없애기
{
  const array = ['dog', 'cat', 'fox', 'dog', 'dog', 'cat'];
  console.log(array);

  console.log([...new Set(array)]);
}