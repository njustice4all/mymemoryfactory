### Array.prototype.includes()

ECMAScript 2016 standard

기존의 array.indexOf(element)를 보완하기위해 나옴

사용 예

```javascript
[1, 2, 3, 4, 5].indexOf(3); // 2
[1, 2, 3, 4, 5].indexOf(3, 3); // -1

if ([1, 2, 3, 4, 5].indexOf(3) !== -1) {
  ...
}
```

명시적이지 않음 + NaN문제

includes의 사용 예

```javascript
[1, 2, 3, 4, 5].includes(3); // true
[1, 2, 3, 4, 5].includes(3, 3); // false

if ([1, 2, 3, 4, 5].includes(3)) {
  ...
}
```

불린값을 리턴해서 명시적으로 바뀌었다.

### Exponentiation Operator **

ECMAScript 2016 standard

제곱구할때 씀 Math.pow(x, y)와 동일

```javascript
console.log(Math.pow(2, 2) === 2 ** 2);
```
