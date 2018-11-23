# 질문들

- docType?
- 고전적인 방식에서 javascript load 시 head 와 body 의 차이
- float 특성
- http 상태코드 (https://item4.github.io/2018-02-08/Basic-HTTP-Status-Codes/)
- GET/POST/PUT/DELETE 차이
- cookie/sessionStorage/localStorage 차이 (대답 잘못함)
- semantic web 이란? (대답 못함)
- react 최적화 (shouldComponentUpdate / PureComponent)
- 디자이너 / 기획자와 협업할때 어떤방식으로 하는지?
- javascript this 와 bind
- react class render 시 class 가 render 되는가? 아니면 class instance 가 render 되는가?
- Promise 사용여부

# 면접에서 봤던 알고리즘 문제들

<code>input = [1, 7, 3, 4]</code>

<code>output = [84, 12, 28, 21]</code>

동작설명 [7 * 3 * 4, 1 * 3 * 4, 1 * 7 * 4, 1 * 7 * 3]

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
};

console.log(myFunction(input));

const newFunction = arr => {
  const sum = arr.reduce((acc, num) => (acc *= num));

  return arr.map(num => sum / num);
};

console.log(newFunction(input));
```

<code>[1, 'hi', undefined, NaN, [1, 2, 3, [NaN, 'hi'], [3]], { a: 'hello' }]</code>

1 차배열로 바꾸기.. 단 오브젝트는 바꾸지 않는다

```javascript
const data = [1, 'hi', undefined, NaN, [1, 2, 3, [NaN, 'hi'], [3]], { a: 'hello' }];
const flatten = arr => {
  return arr.reduce((acc, value) => {
    if (Array.isArray(value)) {
      acc.push(...flatten(value));
    } else {
      acc.push(value);
    }

    return acc;
  }, []);
};

flatten(data);
```

** 파스칼의 삼각형? **
