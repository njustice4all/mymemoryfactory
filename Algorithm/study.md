## 1. countWord

```javascript
function countWord(str) {
  var reg = /\s/g;
  var temp = str.split(reg);
  var arr = temp.filter(function(value) {
    return value !== '';
  });
  return arr.length;
}
```

## 2. singleSpace

```javascript
```

## 3. countNeg

```javascript
function countNegr(arr) {
  var result = arr.filter(function(value) {
    return value < 0;
  });
  return result.length;
}
```

## 4. rms

```javascript
function rms(test) {
  var sum = 0;
  for (var i in test) {
    sum += test[i] * test[i];
  }
  return Math.sqrt(sum / test.length);
}

function rms(test) {
  var sum = 0;
  var result = test.map(function(value) {
    sum += (value * value);
    return sum;
  })
  return Math.sqrt(sum / test.length);
}

function rms(test) {
  var sum = test.reduce(function(total, number) {
    return total + (number * number);
  }, 0);
  return Math.sqrt(sum / test.length);
}
```

## 5. 배열 합쳐서 중복제거

```javascript
function union() {
  var sumArr = [];
  for (var i in arguments) {
    sumArr = sumArr.concat(arguments[i]);
  }
  var result = [];

  for (var i in sumArr) {
    if (result.indexOf(sumArr[i]) === -1 ) {
      result.push(sumArr[i]);
    }
  }
  return result;
}

function union() {
  var result = [];
  var sumArr = Array.prototype.concat.apply([], arguments);
  // var sumArr = [].concat(arguments[0], arguments[1], arguments[2] ... arguments[arguments.length - 1])
  sumArr.forEach(function (v) {
    if (result.indexOf(v) === -1 ) {
      result.push(v);
    }
  });
  return result;
}
```

## 6. filter() 반대

```javascript
function reject(arr, rejectFunc) {
  var result = [];
  for (var i in arr) {
    if (!rejectFunc(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

function reject(arr, rejectFunc) {
  return arr.filter(function(v) {
    return !rejectFunc(v);
  });
}
```

## 7. 최대값

```javascript
// ver 0.1
function topMul(arr){

  var negative = arr.filter(function(v) {
    return v < 0;
  });

  var positive = arr.filter(function(v) {
    return v > 0;
  });

  var negativeBiggest = negative[0],
      negativeSecond = negative[1],
      positiveBiggest = positive[0],
      positiveSecond = positive[1];

  if (negativeBiggest > negativeSecond) {
    negativeBiggest = negative[1];
    negativeSecond = negative[0];
  }

  for (var i = 2; i < negative.length; i++) {
    if (negative[i] < negativeBiggest) {
      negativeSecond = negativeBiggest;
      negativeBiggest = negative[i];
    } else if (negative[i] < negativeSecond) {
      negativeSecond = negative[i];
    }
  }

  if (positiveBiggest < positiveSecond) {
    positiveBiggest = positive[1];
    positiveSecond = positive[0];
  }

  for (var i = 2; i < positive.length; i++) {
    if (positive[i] > positiveBiggest) {
      positiveSecond = positiveBiggest;
      positiveBiggest = positive[i];
    } else if (positive[i] > positiveSecond) {
      positiveSecond = positive[i];
    }
  }

  var sumNegative = 0,
      sumPositive = 0;

  sumNegative = negativeBiggest * negativeSecond;
  sumPositive = positiveBiggest * positiveSecond;

  if (sumNegative > sumPositive) {
    return sumNegative;
  } else if (sumNegative < sumPositive) {
    return sumPositive;
  } else if (isNaN(sumNegative) && !isNaN(sumPositive)) {
    return sumPositive;
  } else if (isNaN(sumNegative) && isNaN(sumPositive)) {
    return 0;
  }
}

console.log(topMul([-3, -5, 2, 4, -6, 7]));
console.log(topMul([1, 2, 3, 4]));
console.log(topMul([0, 0]));
```

```javascript
function topMul(arr) {
    var maxMul = 0;
    var positive = [];
    var negative = [];

    if (arr.length < 2) { // ex) [2]
        return NaN;
    }

    arr.forEach(function(v) {
        if (v > = 0) {
            positive.push(v);
        } else {
            negative.push(-v); // 양수로 변환
        }
    });

    if (positive.length === 1 && negative.length === 1) { // ex) [2, 5]
        return arr[0] * arr[1];
    }

    [positive, negative].forEach(function(sortedArray) {
        if (sortedArray.length > = 2) { // positive나 negative배열의 길이가 2이상일때
            var sorted_numbers = sortedArray.sort(function(a, b) {
                return a < b; // 내림차순 정렬
            });
            maxMul = Math.max(sorted_numbers[0] * sorted_numbers[1], maxMul);
        }
    });

    return maxMul;
}

console.log(topMul([-3, -5, 2, 4, -6, 7]));
console.log(topMul([1, 2, 3, 4]));
console.log(topMul([0, 0]));
console.log(topMul([-2, 3]));
```
