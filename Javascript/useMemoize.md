# 메모이즈 패턴을 사용한 팩토리얼 계산

**클로저 ㅎㅎ**

```javascript
const memoize = fn => {
  let cache = {};

  return number => {
    if (number in cache) {
      return cache[number];
    } else {
      cache[number] = fn(number);
      return fn(number);
    }
  };
};

const factorial = number => {
  if (number < 1) {
    return 1;
  }

  return number * factorial(number - 1);
};

const memoizeFactorial = memoize(factorial);
memoizeFactorial(5); // 계산
memoizeFactorial(5); // 캐시
```

# 피보나치

```javascript
function fibonacci(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[n];
}
```
