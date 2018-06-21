# 면접에서 봤던 알고리즘 문제들

<code>input = [1, 7, 3, 4]</code>

<code>output = [84, 12, 28, 21]</code>

동작설명 [ 7 * 3 * 4, 1 * 3 * 4, 1 * 7 * 4, 1 * 7 * 3]

```javascript
const input = [1, 7, 3, 4];

const myFunction = arr => {
  const result = [];
  let temp = null;

  for (let i = 0; i < arr.length; i++) {
    temp = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        temp *= arr[j];
      }
    }
    result.push(temp);
  }

  return result;
}

console.log(myFunction(input));

```
