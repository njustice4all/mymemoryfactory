# 자바스크립트 소스맵

소스맵이란?

코드의 크기를 줄이는 방법은 압축(compress)또는 축소(minification)라고 한다. 코드 압축 기능을 하는것을 minifier라고 하는데

minifier는 코드의 기능을 유지하면서 필요없는 주석, 빈칸, 필요없는 괄호 등을 제거해서 코드의 크기를 줄인다.

압축기(compressor)는 minifier의 기능을 좀 더 확장한 개념. 지역변수명을 짧게 바꾸거나 인코딩을 바꾼다던지 해서 코드의 크기를 줄인다.

이러한 방식은 성능면에서는 좋지만 디버깅이 어려워 지는 문제가 있다.

소스맵은 이 원본 소스와 변환된 소스를 매핑해서 추적할 수 있는 방법이다.

```javascript
{
  version : 3,                          // 양수로 소스맵의 버전을 의미, 항상 제일먼저 나와야함
  file: "out.js",                       // 변환된 파일명
  sourceRoot : "",                      // 옵션값. 소스파일을 가져올 경로의 루트를 재조정
  sources: ["foo.js", "bar.js"],        // mappings에서 사용할 소스파일 원본의 배열
  sourcesContent: [null, null],         // 옵션값. ???모르겠음
  names: ["src", "maps", "are", "fun"], // mappings에서 사용할 심볼 이름
  mappings: "AA,AB;;ABCDE;"             // 인코딩된 매핑 데이터 문자열 ()
}
```



## delete operator

객체의 속성을 삭제, return value는 boolean type

delete.object.property

```javascript
x = 42;       // 글로벌 객체의 property x를 생성
var y = 44;   // 글로벌 객체의 property y를 생성하고 non-configurable로 설정
myobj = {
  h: 4,
  k: 5
};

x;            // 42
delete x;     // true..  x는 글로벌 객체의 property이고 삭제될수 있다.
x;            // Uncaught ReferenceError: x is not defined(…)

y;            // 44
delete y;     // false.. y는 non-configurable이기 때문에 삭제될수 없다.
y;            // 44

delete Math.PI; // false.. 미리 정의된 특정 속성에 영향을 주지 않는다.

delete myobj.h; // true.. 지워진다...
delete myobj;   // true.. 지워진다...
```

## in operator

속성의 이름이나 배열의 인덱스가 객체에 존재하면 true 반환

```javascript
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
4 in trees     // true.. trees객체안의 4번째 인덱스
5 in trees     // false.. 5번째 인덱스는 없다.
"redwood" in trees  // false  배열의 인덱스여야한다.

var myCar = {
  company: "Lamborghini",
  model:   "Roadster",
  year:    2014
};

"company" in myCar  // true.. myCar 객체안에 company라는 property가 있다.
```

## instanceof

객체가 다른 객체의 인스턴스인지...  Object instanceof Constructor

```javascript
// Car 생성자
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var mycar = new Car("Honda", "Accord", 1998); // Car생성자를이용해서 mycar객체를 만듬
mycar instanceof Car;    // true
mycar instanceof Object; // true
```

## let

블록 유효범위를 갖는 지역 변수를 선언한다.

코드를 좀 더 명확하고 알아보기 쉽게 하기 위해서 쓴다.

```javascript
function varTest() {
  var x = 31;
  if (true) {
    var x = 71;  // 같은 var x이다.
    console.log(x);  // 71
  }
  console.log(x);  // 71 당연한 결과이다.
}

function letTest() {
  let x = 31; // letTest함수안에 x다
  if (true) {
    let x = 71;  // if문 안에서의 x
    console.log(x);  // 71
  }
  console.log(x);  // 31
}
```

블록 내에서 중복으로 정의한 경우 TypeError가 발생한다.

```javascript
if (x) {
  let foo;
  let foo; // TypeError !!!
}
```

```javascript
for (let i = 0; i<10; i++) {
  console.log(i); // 0, 1, 2, 3, 4 ... 9
}

console.log(i); // i is not defined

for (var i = 0; i<10; i++) {
  console.log(i); // 0, 1, 2, 3, 4 ... 9
}

console.log(i); // 10
```

## 재귀호출(recursive)

```javascript
// 팩토리얼... 5! => 5 x 4 x 3 x 2 x 1 ...
function myFactorial(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * myFactorial(num - 1);
  }
}

// 더 간단하게...
function myFactorial(num) {
  return num === 1 ?  1 :  num * myFactorial(num - 1);
}

// 객체안에 객체가 들어있을때 꺼내는 방법...
var sports = {
    soccer : {step: {member : 11}, time: 90},
    basketball : {member: 5, time: 48}
}; // sports object안에 또 다른 object를 포함하고있는 계층적인 구조이다.

function showValues(sports) {
    var type, obj;
    for(type in sports) {
        obj = sports[type];
        typeof obj === "object" ? showValues(obj) : console.log(type + " : " + obj);
// soccer -> compare object true -> step -> compare object true -> value -> compare object false -> member : 11
    }
}
/*
member : 11
time : 90
member : 5
time: 48
*/
```

## const

재할당 x 재설정 x (read only)

explorer는 11부터 지원

```javascript
const MY_FAV_NO = 7;
MY_FAV_NO = 20; // 재할당 못한다고 TypeError남

const MY_FAV_NO = 20; // 식별자 MY_FAV_NO는 이미 선언되어있다고 TypeError남

const FOO; // const선언에는 초기화가 필요하다.. 때문에 SyntaxError남

const MY_OBJECT = {
  "key": "value"
}; // const는 object에서도 사용 가능 {key: "value"}

MY_OBJECT = {
  "name": "yj"
}; // 마찬가지로 재할당 못한다고 TypeError남

// 하지만 객체의 key는 보호되지 않는다.
MY_OBJECT.key = "changed";
// {key: "changed"}

// 결론 : 객체를 immutable하게 하려면 object.freeze();를 써라!!
```

## class

class선언은 hoisting되지 않는다.

chrome 42.0 / explorer ?

```javascript
// 아래 두개의 클래스에서 Square클래스가 먼저 선언되면 에러남... hoisting되지 않기 때문에
class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
}

var polygon = new Polygon(); // 이렇게 쓸수있다.
typeof polygon; // function
polygon; // Polygon {name: "Polygon", height: undefined, width: undefined} 생성자를 쓰지 않았기 때문에 height, width는 undefined로 나온다.

var polygon = new Polygon(4, 8); // 이건 height와 width를 매개변수로 명시했기 때문에 4와 8이 잘 출력됨.

// Polygon을 상속받은 Square클래스.. super()는 this가 사용되기 전에 호출되어야 한다.
class Square extends Polygon {
  constructor(length) {
    super(length, length); // 부모클래스에 Square클래스 생성할때 받는 매개변수를 넘겨준다.
    this.name = 'Square';
  }
}

var square = new Square(4);
square; // Square {name: "Square", height: 4, width: 4}
```

## super

super키워드는 부모 오브젝트의 함수를 호출할때 사용

super([arguments]);

Chrome 42.0 / explorer ?

## for...in과 for...of차이

for...of는 chrome 38 / Edge 12 / Explorer ?

```javascript
var iterable = 'boo';
for (var value of iterable) {
  console.log(value);
}
/*
b
o
o
*/
for (var value in iterable) {
  console.log(value);
}
/*
0
1
2
*/
```

## label

```javascript
var i, j;

loop1: // 첫번째 for문을 loop1이라고함
for (i = 0; i < 3; i++) {
   loop2: // 두번째 for문을 loop2라고함
   for (j = 0; j < 3; j++) {
      if (i === 1 && j === 1) {
         continue loop1; // 두번째 for문을 도는도중 i와 j가 1일경우 loop1로 가게 함
      }
      console.log("i = " + i + ", j = " + j);
   }
}
/*
i = 0, j = 0
i = 0, j = 1
i = 0, j = 2
i = 1, j = 0
i = 2, j = 0
i = 2, j = 1
i = 2, j = 2
*/
```

## 속성접근자

속성에 access하는 방법은 두가지가 있다.

```javascript
// . 점 표기법 property는 숫자로 시작하면 안된다. object.$1은 가능 object.1은 안됨
get = object.property;
object.property = set;

// [ ] 각괄호 표기법 property_name은 문자열. 1foo, !foo 모두 가능
get = object[property_name];
object[property_name] = set;

// 각괄호 표기법 예제
var object = {};
object['1'] = 'value'; // 숫자를 포함하는 모든 비 문자열 객체는 object[이곳]에서 toString()을 통해 형변환됨
console.log(object[1]);
```

## new

생성자의 인스턴스를 만듬... new constructor[([arguments])]

```javascript
function Car() {}
car1 = new Car();
// 지금 car1에는 color property가 없다. 따라서 undefined
console.log(car1.color);    // undefined
// Car prototype에 color property를 null로 설정한다.
Car.prototype.color = null;
// wow....
console.log(car1.color);    // null

car1.color = "black";
console.log(car1.color);   // black

Car.prototype.color = 'red'; // prototype color를 red로...
console.log(car1.color);   // black... red로 바뀌진 않는다.
```

## 전개연산자

여러개를 통째로 넘겨준다...?

```javascript
// 배열을 함수의 인수로 사용하고 싶을때 function.protytype.apply를 쓴다.
function myFunction(a, b, c) {
  return a + b + c;
}
var myArr = [1, 2, 3];
myFunction.apply(this, myArr);

// 같은결과이다 es6에 새로 추가된 전개연산자 문법임.
myFunction(...myArr);

// 여러번 쓸수도있다
function myFunction(v, w, x, y, z) {
  console.log(v, w, x, y, z);
}
var args = [0, 1];
myFunction(-1, ...args, ...[3, 4]); // -1 0 1 3 4

// 배열안에 끼워넣음...
var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];

// arr1에 arr2를 push할수도있다...
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2);
arr1; // [0, 1, 2, 3, 4, 5]
```

## 단항 연산자 +, -

\+ : 단항 더하기 연산자. 피연산자를 숫자형으로 변환함

\- : 단항 빼기 연산자. 피연산자를 숫자형으로 변환하고 부정함

```javascript
+3         // 3
+'3'       // 3
+'3이야'   // NaN
+'-3'      // -3
+true      // 1
+false     // 0
+null      // 0
+undefined // NaN
+0         // 0

-3          // -3
-'3'        // -3
-'-3'       // 3
-'3이야'    // NaN
-true       // -1
-false      // -0
-null       // -0
-undefined  // NaN
-0          // -0
```

## 논리 NOT 연산자

헷깔리면 console에서 Boolean(헷갈리는거); 하면 확실함

```javascript
!true       // false
!false      // true
!1          // false
!0          // true
!'hi'       // false
!''         // true
!undefined  // true
```

## 선택 연산자 ||

```javascript
var a = 0,
    b = false,
    c = 1;

// 위의 조건이 모두 boolean형으로 변환해서 false일 경우 0이 반환된다.
console.log( a || b || c); // 1
```

## instanceof

어떠한 객체가 어떠한 생성자에서 만들어진 인스턴스인지 boolean값으로 리턴해준다.

```javascript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var myObj = new Car("Volkswagen", "Golf", 2014);
myObj instanceof Car; // true
```

## 화살표함수 =>

익명함수를 편한방법으로 쓸수있다.

```javascript
// ES5
var selected = allJobs.filter(function (job) {
  return job.isSelected();
});

// ES6 job을 parameter값으로 주고 => job.isSelected()를 return한다
var selected = allJobs.filter(job => job.isSelected());

// ES5
var total = values.reduce(function (a, b) {
  return a + b;
}, 0);

// ES6 parameter값이 여러개면 괄호로 묶어서 한다...
var total = values.reduce((a, b) => a + b, 0);

// 빈객체{}와 비어있는블록{}을 주의하자. 객체리터럴은 무조건 괄호로 묶는다!!!
var chewToys = puppies.map(puppy => {});   // BUG!
var chewToys = puppies.map(puppy => ({})); // ok
```
