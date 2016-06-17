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
