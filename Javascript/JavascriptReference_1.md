# ***sort 동작방식***

arr.sort(compareFunction(a, b));

compareFunction을 지정하지 않으면 Unicode 값으로 비교한다.

compareFunction(a, b)의 리턴값이 0보다 작으면 a가 b보다 낮은 인덱스에 위치한다.

compareFunction(a, b)의 리턴값이 0이면 a와 b는 같기 때문에 인덱스 위치를 바꾸지 않는다.

compareFunction(a, b)의 리턴값이 0보다 크면 b가 a보다 낮은 인덱스에 위치한다.

기존의 배열이 바뀐다.

```javascript
/*
4 2 5 1 3

2 4 5 1 3
2 4 5 1 3
2 4 1 5 3
2 4 1 3 5
2 4 1 3 5
2 1 4 3 5
2 1 3 4 5
2 1 3 4 5
1 2 3 4 5
*/
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  console.log("a: " + a + "   " + "b: " + b);
  console.log(numbers);
  return a - b;
}); // [1, 2, 3, 4, 5]

// 알파벳 내림차순으로 정렬
// ["Z", "Zamm", "Zam", "Ozange", "Orange", "Bcnana", "Bbnana", "Banana"]
var fruits = ["Banana", "Bbnana", "Z", "Bcnana", "Orange", "Zamm", "Ozange", "Zam"];
fruits.sort(function(a, b) {
  var sumA = 0, sumB = 0, arrTempA = [], arrTempB = [];

  arrTempA = a.split('');
  arrTempB = b.split('');

  if ((arrTempA.length > arrTempB.length) || (arrTempA.length < arrTempB.length)) {
    return b.charCodeAt() - a.charCodeAt();
  }
  for(var i in arrTempA) {
    sumA += arrTempA[i].charCodeAt();
  }
  for(var i in arrTempB) {
    sumB += arrTempB[i].charCodeAt();
  }

  return sumB - sumA;
});
```

## javascript reference

### 값 속성

* undefined

undefined는 전역객체의 property

값을 할당받지 않은 변수는 undefined 타입이다.

메소드 또는 문장(statement)은 수행되어야 하는 변수가 값을 할당 받지 않은 경우에 undefined를 반환한다.

함수는 값이 return되지 않았을 경우에 undefined를 반환한다.

undefined는 예약어가 아니기 때문에, 전역 스코프 외에 어떤 스코프에서도 변수명으로 사용될 수 있다.

* null

null은 null또는 빈 값의 javascript 리터럴 표현방식. 객체 값이 존재하지 않는다.

```javascript
typeof null // object (ECMAScript의 버그로, null이어야함)
typeof undefined // undefined
null === undefined // false
null == undefined // true
```

### 함수 속성

* isNaN()

javascript는 다른 모든 가능한 값과는 달리, 값이 NaN인지 아닌지 판단하기 위해 equal연산자에 의존할 수 없다. NaN == NaN 및 NaN === NaN 둘다 false로 평가하기 때문에 isNaN함수가 필요하다.

```javascript
isNaN(NaN); // true
isNaN(undefined); // true

isNaN('37'); // false 문자열37이 숫자 37로 변환
isNaN('123abc'); // true parseInt('123abc')는 123 Number('123abc')는 NaN
isNaN(''); // false 빈 문자열은 0으로 변환됨
isNaN(' '); // false 공백이 있는 문자열도 0으로 변환됨

isNaN('hi'); // true
```

* parseInt()

문자열을 파싱해서 정수값을 리턴함

parseInt('문자열', 파싱할 기준이 되는 진수)

```javascript
parseInt('123'); // 123
parseInt('123abc'); // 123
parseInt('abc123'); // NaN
parseInt('01'); // 1
parseInt('123.123'); // 123

parseInt('1101', 2); // 13 2진수 1101은 정수 13임
```

* decodeURI()

인코딩되기 전 상태의 URI로 되돌려줌

```javascript
// 러시아어 표기
decodeURI("https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B");
// "https://developer.mozilla.org/ru/docs/JavaScript_шеллы"
```

### 기초객체

## Object

* Object.create()

지정된 프로토타입 객체 및 property를 갖는 새 객체를 만든다.

Object.create(프로토타입객체[, property])

* Object.defineProperty()

객체에 새로운 property를 정의하거나 이미 존재하는 객체를 수정한 뒤 그 객체를 반환함

Object.defineProperty(속성을 정하고자하는 객체, 수정하거나 만들 속성의 이름, 해당 속성에대해 기술함)

1. configurable : 해당 객체로부터 그 속성을 제거할 수 있는지.. true면 삭제가능 default는 false

2. enumerable : 해당 객체의 키가 열거 가능한지? true면 열거가능 default는 false

3. value : 속성에 해당되는 값. 오직 javascript value(number, object, function, etc)만 올수있다. default는 undefined

4. writable : true로 설정되면 할당 연산자 assignment operator를 통해 값을 바꿀수 있다. default는 false

5. get : 속성의 값을 얻는 getter함수. getter를 제공하지 않으면 undefined가 온다. 이 함수의 반환값은 속성의 값으로 사용된다. default는 undefined

6. set : 속성의 값을 설정하는 setter함수. setter를 제공하지 않으면 undefined. 오직 하나의 인자를 받으며 해당 속성의 값으로 할당됨. default는 undefined

```javascript
// 빈 o객체에 이름이 a인 새로운 property를 정의
var o = {};
Object.defineProperty(o, 'a', {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true
});  // Object {a: 37}

// o 객체에 이름이 b인 새로운 property 정의
var bValue = 38;
Object.defineProperty(o, 'b', {
  get: function() {
    return bValue;  // var bValue = 38이 b property의 value가 된다.
  },
  set: function(newValue) {
    bValue = newValue;
  },
  enumerable: true,
  configurable: true
});

// 객체에서 해당키가 제거될 수 있는지와 (writable을 제외한)기술속성을 변경할 수 있는지에 대한 여부를 동시에 통제한다
var o = {};
Object.defineProperty(o, 'a', {
  get: function() { return 1; },
  configurable: false
});

// configurable false이기 때문에 해당 property에 뭔짓을 하더라도 TypeError: Cannot redefine property: a(...) 발생
Object.defineProperty(o, 'a', { configurable: true });
Object.defineProperty(o, 'a', { enumerable: true });
Object.defineProperty(o, 'a', { set: function() {} });
Object.defineProperty(o, 'a', { get: function() { return 1; } });
Object.defineProperty(o, 'a', { value: 12 });

// .을 통한 속성 추가와 Object.defineProperty()를 사용한 경우는 아래와 같이 다르다
var o = {};
o.a = 1; // .을 통해 property a의 value를 1로 정의
// 위의 표현은 아래와 같다
Object.defineProperty(o, 'a', {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true
}); // writable, configurable, enumerable 모두 true

Object.defineProperty(o, 'a', { value: 1 }); // defineProperty를 사용해 property a 의 value를 1로
// 아래의 의미를 지니게 된다
Object.defineProperty(o, 'a', {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false
}); // writable, configurable, enumerable 모두 false
```

* Object.freeze()

객체를 얼려버림... 속성추가x 제거x configurable x writable x enumerable x... 결국 immutable하게 만듬

```javascript
// 주의!! 얼려진 객체 안의 객체는 명시적으로 얼려지기 전 까지는 변경 가능
var obj = {
  internal: {}
};
Object.freeze(obj);
obj.internal.a = 'aValue';
obj.internal.a; // 'aValue' 가 출력됨
```

* Object.seal()

객체를 밀봉함. 새로운 속성 추가하거나 설정 불가능하게 만듬, 하지만 쓰기 가능한 속성의 값은 seal()후에도 변경 가능

```javascript
// seal()하기 전에 속성값 변경과 속성추가 속성삭제 잘 됨
var obj = {
  prop: function() {},
  foo: 'bar'
};
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

Object.seal(obj); // obj객체 밀봉

obj.foo = 'wow'; // 밀봉 후에도 속성값은 변경 가능

obj.newFoo = 'hello'; // newFoo라는 새로운 속성을 추가하려는데 기존의 obj가 밀봉되었기 때문에 추가되지않음
delete obj.foo; // 마찬가지로 삭제도 되지 않음.
```

## Function

* apply()

apply()는 주어진 this값과 arguments로 함수를 호출한다. arguments에는 배열이 온다.

* call()

call()은 주어진 this값과 각 각 제공받은 인자들로 함수를 호출한다.

* bind()

새로운 함수를 생성하고, 그 함수가 호출되었을 때, 예약어인 this에 연속된 arguments값들을 설정한다.

## Error

런타임 에러가 발생하면 새로운 Error객체를 생성하고 던진다. javascript에서는 6개의 코어 에러 생성자가 있다.

1. EvalError

   전역함수 eval()에 의해 발생하는 에러 인스턴스를 생성

2. RangeError

   숫자 변수나 파라미터가 유효한 범위를 벗어났을때 발생하는 에러 인스턴스 생성

3. ReferenceError

   잘못된 참조를 했을때 발생하는 에러 인스턴스를 생성

4. SyntaxError

   eval()함수로 코드를 해석하는 중에 발생하는 문법 에러 인스턴스를 생성

5. TypeError

   변수나 파라미터 값이 적절한 값이 아닐때 발생하는 에러 인스턴스를 생성

6. URIError

   encodeURI()나 decodeURI() 함수에 부적절한 파라미터가 넘겨졌을때 발생하는 에러 인스턴스를 생성

## 숫자 및 날짜

### Number

```javascript
// Number객체를 사용하여 변수에 값을 할당
var biggestNum = Number.MAX_VALUE; // 1.7976931348623157e+308
var smallestNum = Number.MIN_VALUE; // 5e-324
var infiniteNum = Number.POSITIVE_INFINITY; // Infinity
var negInfiniteNum = Number.NEGATIVE_INFINITY; // -Infinity
var notANum = Number.NaN; // NaN

// 정수형타입의 가장 큰 수 와 가장 작은 수
var biggestInt = 9007199254740992;
var smallestInt = -9007199254740992;

Number("123")     // 123
Number("")        // 0
Number(" ")       // 0
Number("0x11")    // 16진수11 => 17
Number("0b11")    // 2진수11 => 3
Number("0o11")    // 8진수11 => 9
Number("foo")     // NaN
Number("100a")    // NaN
```

### Math

* Math.PI

```javascript
// 파이값
Math.PI; // 3.141592653589793
```

* Math.sqrt()

```javascript
// 루트
Math.sqrt(9);      // 3
Math.sqrt(2);      // 1.414213562373095
Math.sqrt(1);      // 1
Math.sqrt(0);      // 0
Math.sqrt(-1);     // NaN
math.sqrt(-9);     // NaN
```

* Math.abs()

```javascript
// 절대값
Math.abs('-1');     // 1
Math.abs(-2);       // 2
Math.abs(null);     // 0
Math.abs('');       // 0
Math.abs(' ');      // 0
Math.abs(' 1');     // 1
Math.abs('1이야');  // NaN
Math.abs([]);       // 0
Math.abs([2]);      // 2
Math.abs([1,2]);    // NaN
Math.abs({});       // NaN
Math.abs('string'); // NaN
Math.abs();         // NaN
```

* Math.ceil()

```javascript
// 올림
Math.ceil(0.0001);    // 1
Math.ceil(-3.00001);  // -3
Math.ceil(5);         // 5
Math.ceil(-4.9);      // -4
```

* Math.floor()

```javascript
// 내림
Math.floor(11.99);    // 11
Math.floor(0);        // 0
Math.floor(-10.00001) // -11
Math.floor(-10.99999) // -11
```

* Math.max() & min()

```javascript
// 최대값 리턴
Math.max(1, 2, 3);         // 3
Math.max(0, -99, '십일');  // NaN

var arr = [11, 22, 33];
Math.max(arr); // NaN

Math.max.apply(this, arr); // 33
```

* Math.random()

0부터 1미만의 실수 반환

```javascript
Math.random();   // 0.???????????
Math.floor(Math.random() * 10);  // 0 부터 9
```

* Math.round()

```javascript
// 반올림
Math.round(20.49);       // 20
Math.round(20.5);        // 21
Math.round(-21.5);       // -21  음수의 경우 소수 부분이 정확하게 -0.5이면 반환 값은 number보다 큰 가장 작은 정수
Math.round(-21.500001);  // -22
```

### Date

날짜는 1970년 1월 1일 0시 부터 밀리초로 계산됨

밀레니엄 계산과의 호환성을 위해 연도를 지정할 때는 반드시 4자리로 써야함

```javascript
new Date(); // 로컬시간
/*
value로 지정하는방법 Sun Dec 17 1995 00:00:00 GMT+0900 (대한민국 표준시)
11은 11번째 달, 12월을 뜻한다. 0번째 달은 1월...
0시0분0초로 나오는건 default값이 0이다
*/
new Date(95, 11, 17);

// 년 월 일 시 분 초
new Date(95,11,17,3,24,0); // Sun Dec 17 1995 03:24:00 GMT+0900 (대한민국 표준시)

// dateString으로 지정하는방법 문자열은 parse메소드에 의해 인식 가능한 형식이어야 한다.
new Date("December 17, 1995 03:24:00");

new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
```

* Date.now()

1970년 1월 1일 0시부터 현재까지 지난 시간을 밀리초로 계산해서 리턴함

* Date.parse()

날짜를 포함한 문자열 구문을 분석하여 1970년 1월 1일 0시부터 해당 날짜 사이의 시간을 밀리초로 계산해서 리턴함

```javascript
Date.parse('Aug 9, 1995');     // 807894000000
Date.parse('Aug, 9, 1995');
Date.parse('August, 9, 1995');
Date.parse('august, 9, 1995');
Date.parse('1995 aug 9');
Date.parse('1995 8 9');
Date.parse('1995/8/9');
Date.parse('1995.8.9');
Date.parse('1995-8-9');

Date.parse('bugust, 9, 1995'); // NaN
Date.parse(Aug 9 1995);    // SyntaxError
```

* getDate()

```javascript
// 1 ~ 31일중 몇번째 날인지 리턴함
var Xmas95 = new Date('December 25, 1995 23:15:30');
Xmas95.getDate(); // 25일
```

* getDay()

```javascript
// 무슨요일인지 숫자로 리턴 (0:일요일 1:월요일 2:화요일...6:토요일)
var Xmas95 = new Date('December 25, 1995 23:15:30');
Xmas95.getDay(); // 1  (월요일)
```

## 구조화된 데이터

### JSON

JavaScript Object Notation

* JSON.parse()

JSON.parse(text[, reviver])

주어진 JSON text에 따라 Object를 리턴함 JSON text => Object

속성명은 큰 따옴표로 묶어야함.  쉼표(,)로 끝나면 안됨

```javascript
// Object {1: 1, 2: 2, 3: Object}  3번째 객체안에 4: 4, 5: Object Object안에 6: 6
JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}');
```

* JSON.stringify()

지정된 값에해당하는 JSON text 반환  Object => JSON text

```javascript
// JSON.parse()와 JSON.stringify()의 예제
var session = {
  'screens': [],
  'state': true
};

// session.screens객체에 push함  Object {screens: Array[6], state: true}
session.screens.push({ 'name': 'screenA', 'width': 450, 'height': 250 });
session.screens.push({ 'name': 'screenB', 'width': 650, 'height': 350 });
session.screens.push({ 'name': 'screenC', 'width': 750, 'height': 120 });
session.screens.push({ 'name': 'screenD', 'width': 250, 'height': 60 });
session.screens.push({ 'name': 'screenE', 'width': 390, 'height': 120 });
session.screens.push({ 'name': 'screenF', 'width': 1240, 'height': 650 });

// localStorage에 키값이 'session'이고 밸류는 JSON text인 값을 저장함
localStorage.setItem('session', JSON.stringify(session));

/* localStorage에 저장되어있는 데이터를 키값 session으로 꺼내보면...
아래의 JSON text가 있다. 길게나오는데 직관적으로 보기위해 엔터침
"{"screens":[
  {"name":"screenA","width":450,"height":250},
  {"name":"screenB","width":650,"height":350},
  {"name":"screenC","width":750,"height":120},
  {"name":"screenD","width":250,"height":60},
  {"name":"screenE","width":390,"height":120},
  {"name":"screenF","width":1240,"height":650}
],"state":true}"
*/
localStorage.getItem('session');

// JSON text를 다시 Obejct로 변환하고 싶을땐.. JSON.parse()를 사용한다.
var restoredSession = JSON.parse(localStorage.getItem('session'));
console.log(restoredSession); // Object {screens: Array[6], state: true}
```

## arguments

arguments객체는 모든 함수에서 이용 가능한 지역변수.

arguments객체를 사용하여 함수 내에서 함수의 인수를 참조할 수 있다.

첫번째 인덱스는 0이다. 인수의 첫번째 => arguments[0] 첫번째 => arguments[1] 이런형식이다.

arguments객체는 Array가 아니다. Array와 비슷하지만 length 빼고는 어떤 Array속성도 없다.

```javascript
function test(a, b, c) {
  console.log(typeof arguments);  // object
  console.log(arguments.length);  // 3
  console.log(arguments); // [1, 2, 3]
  console.log(arguments[0], arguments[1], arguments[2]); // 1 2 3
}

test(1, 2, 3);
```
