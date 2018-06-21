### Array.prototype.includes()

ECMAScript 2016 standard

기존의 array.indexOf(element)를 보완하기위해 나옴

ie no support

사용 예

```javascript
[1, 2, 3, 4, 5].indexOf(3); // 2
[1, 2, 3, 4, 5].indexOf(3, 3); // -1

if ([1, 2, 3, 4, 5].indexOf(3) !== -1) {
  ...
}
```

명시적이지 않음 + NaN 문제

includes 의 사용 예

```javascript
[1, 2, 3, 4, 5].includes(3); // true
[1, 2, 3, 4, 5].includes(3, 3); // false

if ([1, 2, 3, 4, 5].includes(3)) {
  ...
}
```

불린값을 리턴해서 명시적으로 바뀌었다.

### Exponentiation Operator \*\*

ECMAScript 2016 standard

제곱구할때 씀 Math.pow(x, y)와 동일

```javascript
console.log(Math.pow(2, 2) === 2 ** 2);
```

### different sort

```javascript
const arr = [6, 7, 4, 5, 3, 9, 2, 1, 8];

// way 1
arr.sort((a, b) => a - b);

// way 2
let temp = null;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
    }
  }
}

// way 3 짜놓고도 개구림
let tempArr = [];
let newTemp = Object.assign([], arr);
for (let i = 0; i < arr.length; i++) {
  let min = Math.min(...newTemp);
  tempArr.push(min);
  newTemp.splice(newTemp.indexOf(min), 1);
}
```
