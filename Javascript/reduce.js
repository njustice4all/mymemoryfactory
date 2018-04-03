const votes = [
  'bmw',
  'audi',
  'hyundai',
  'kia',
  'porche',
  'bmw',
  'bmw',
  'porche',
  'lexus',
  'lexus',
  'benz',
  'benz',
  'benz',
];

const initial = {};

const reducer = (accumulator, value) => {
  // let count = 1;
  // if (accumulator[value]) {
  //   count = accumulator[value] + 1;
  // }
  // accumulator[value] = count;
  
  if (!accumulator[value]) {
    accumulator[value] = 1;
  } else {
    accumulator[value] = accumulator[value] + 1;
  }

  return accumulator;
};

const result = votes.reduce(reducer, initial);
console.log(result);

// 구현...
const numbers = [12, 54, 18, 130, 44];

const cal = (value, index, array) => {
  if (array.length === index) {
    return value;
  }

  value += array[index];
  index++;
  
  return cal(value, index, array);
}

cal(0, 0, numbers);


// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]이란 배열을 만든다.
// 이 배열의 각 요소들을 x3한 배열을 구한다.
// x3한 배열에서 2의 배수만 추려내서 새로 배열을 구한다.
// 2의 배수들만 모아놓은 각 요소들을 합한 결과를 구하자.

const empty10Array = new Array(10);
const numbers = empty10Array.fill(undefined).map((value, index) => index + 1);
const x3Array = numbers.map(value => value * 3);
const evenNumbers = x3Array.filter(value => value % 2 === 0);
const sum = evenNumbers.reduce((accumulator, value) => accumulator + value);

const fillNumbers = array => array.fill(undefined).map((value, index) => index + 1);
const x3 = array => array.map(value => value * 3);
const getEvenNumbers = array => array.filter(value => value % 2 === 0);
const getSum = array => array.reduce((accumulator, value) => accumulator + value);

const targets = [empty10Array, fillNumbers, x3, getEvenNumbers, getSum];

const result = targets.reduce((accumulator, fn) => fn(accumulator));

console.log(result);

