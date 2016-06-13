## 함수 중첩

```javascript
function addSquares(a,b) { // 외부함수 addSquares
  function square(x) { // 내부함수 square
    return x * x;
  }
  return square(a) + square(b);
}

addSquares(4, 2); // 20출력
```

## 클로저

클로저는 두 개의 것(함수, 그 함수가 만들어진 환경)으로 이루어진 특별한 객체의 한 종류이다.

환경이라 함은 클로저가 생성될 때 그 범위 안에 있던 여러 지역 변수들로 이루어진다.

예제의 add5와 add10은 같의 정의(makeAdder)를 가지지만 다른환경(파라매터 5, 10)을 저장한다

```javascript
var pet = function(name) {  // 외부함수 pet의 parameter값 name
  var getName = function() {
    return name; // 내부함수 getName에서 외부함수 parameter값 name에 접근
  }
  return getName(); // 외부함수 pet에서 내부함수 getName을 리턴함
}
pet('dog'); // dog

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5); // add5 클로저 함수
var add10 = makeAdder(10); // add10 클로저 함수

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```

## 함수 내에서 arguments

함수의 parameter값이 배열형식으로 지정됨

```javascript
function a() {
  return arguments;
}

a(1, 2); // [1, 2]
a(3, 5, 8); // [3, 5, 8]
```

## 일급 함수

자바스크립트는 함수를 변수에 저장할 수 있다.

```javascript
var foo = funtion() {
  console.log('hello javascript');
}

foo(); // hello javascript
```

## eval();

eval()함수의 parameter는 문자열.

하지만 문자열이 표현식을 나타낸다면 eval()은 표현식을 실행함

보안문제 때문에 불필요하게 사용하지 않는다.

```javascript
eval(new String("2 + 2"));
// "2 + 2"인 문자열 객체 반환
// String {0: "2", 1: " ", 2: "+", 3: " ", 4: "2", length: 5, [[PrimitiveValue]]: "2 + 2"}
eval("2 + 2"); // 4 반환
```

## 엄격한 비교

자바스크립트에서 동등성 비교시에는 === 연산자를 사용함

== 은 두 값을 공통형으로 변환 후 비교

```javascript
'' == '0'         // false
'' == 0           // true
'0' == 0          // true
false == 'false'  // false
false == '0'      // true

// 엄격한 비교 연산자인 ===을 사용할 경우 위의 모두 false
```

## 삼항연산자

조건 ? 조건이 참일때 실행 : 조건이 거짓일때 실행

```javascript
var num = 10;
(num > 5) ? console.log('num은 5보다 큼') : console.log('num은 5보다 작음');
// num은 5보다 큼
```

## typeof

변수타입을 알아낼때 사용

```javascript
typeof 3         // number
typeof true      // boolean
typeof 'hello'   // string
typeof { a: 1 }  // object
typeof function() { } // function
```

## String 매서드 종류

* concat()

```javascript
var str1 = "hello ";
var str2 = "javascript";
str1.concat(str2); // Hello javascript
```

* charAt()

```javascript
var str = 'hello javascript';
str.charAt(1); // e
```

* includes()

```javascript
var str = 'hello javascript';
str.includes('javascript'); // true
```

* indexOf()

```javascript
var str = 'hello javascript';
str.indexOf('javascript'); // 6
```

* repeat()

```javascript
var str = 'hello javascript';
str.repeat(2); // hello javascripthello javascript
```

* split()

```javascript
var str = 'how are you doing today?';
str.split(' '); // ["how", "are", "you", "doing", "today?"] 공백으로 스플릿함
```

* slice()

```javascript
var str = 'hello javascript';
str.slice(1, 7); // "ello j"  1번째부터 7번째 전까지
```

* substr()

```javascript
var str = 'hello javascript';
str.substr(1, 7); // "ello ja" 1번째부터 7까지
```

* toLowerCase()

```javascript
var str = 'HELLO JAVASCRIPT';
str.toLowerCase(); // hello javascript
```

* toUpperCase()

```javascript
var str = 'hello javascript';
str.toUpperCase(); // HELLO JAVASCRIPT
```

나머지 - http://www.w3schools.com/jsref/jsref_obj_string.asp

## Array 매서드 종류

* concat()

```javascript
var a = ['keyboard', 'mouse'];
var b = ['hdd', 'ram'];
a.concat(b); // ['keyboard', 'mouse', 'hdd', 'ram']
```

* every()

```javascript
var test = [20, 30, 40];
function checkNo(no) {
  return no > 19;
}
test.every(checkNo); // true
```

* filter()

```javascript
var test = [20, 30, 40];
function checkNo(no) {
  return no > 25;
}
test.filter(checkNo); // [30, 40]
```

* forEach()

```javascript
var sum = 0;
var test = [20, 30, 40];
function sumItem(item) {
  sum += item;
}
test.forEach(sumItem);
console.log(sum); // 90
```

* join()

```javascript
var test = ['a', 'b', 'c'];
test.join(' or '); // "a or b or c" 문자열로 반환
```

* map()

```javascript
var numbers = [4, 9, 16, 25];
numbers.map(Math.sqrt); // [2, 3, 4, 5] 인덱스별 결과 리턴
```

* pop()

```javascript
var test = ['a', 'b', 'c'];
test.pop();
console.log(test); // ['a', 'b']
```

* push()

```javascript
var test = ['a', 'b', 'c'];
test.push('d');
console.log(test); // ['a', 'b', 'c', 'd']
```

* reverse()

```javascript
var test = ['a', 'b', 'c'];
test.reverse(); // ['c', 'b', 'a']
```

* shift()

```javascript
var test = ['a', 'b', 'c'];
test.shift();
console.log(test); // ['b', 'c']  첫번째 인덱스 제거.. 배열의 크기도 작아짐
```

* toString()

```javascript
var test = ['a', 'b', 'c'];
test.toString(); // "a, b, c" 문자열로 반환
```

나머지 - http://www.w3schools.com/jsref/jsref_obj_array.asp

## object 생성

```javascript
//첫번째
var myCar = new Object(); // 빈 오브젝트

//두번째
var honda = {  // 리터럴 방식 object 생성
  color : "black",
  wheels : 4,
  engine : {
    cylinders : 4,
    size : 2.2
  }
};

//세번째
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var mycar = new Car("Eagle", "Talon TSi", 1993); // 생성자 함수를 이용한 object 생성

//네번째
var Animal = {
  type: "Invertebrates",
  displayType : function(){
    console.log(this.type);
  }
} // 원형 객체를 정의해둠

var test = Object.create(Animal); // 정의해둔 원형 객체를 사용하여 Object 생성
test.displayType();
```

## 메소드와 속성

객체의 프로퍼티 중에서 함수인 것을 메소드라함

```javascript
// 이미 존재하는 objectname이라는 객체에 methodname이라는 메소드를 추가

// function_name은 메소드로 사용될 함수의 이름
objectname.methodname = function_name;

// 객체를 정의할 때 메소드도 같이 정의
var myobj = {
  myMethod : function() {

  }
}
```

## this

일반적으로 method 내부에서 this 키워드를 사용하면 해당 method를 포함한 객체를 가르킨다.

this는 method를 호출하는 객체를 지칭

```javascript
console.log(this === window); // true

// 함수가 한 객체의 메소드로 호출되었을 때, this는 메소드가 호출된 객체가 할당
var o = {
  prop: 11,
  f: function() {
    return this.prop; // 여기의 this는 o객체와 연결
  }
};
console.log(o.f()); // 11

var test = {
  f: function() {
    return this.a + this.b;
  }
};
var p = Object.create(test);
p.a = 1;
p.b = 4;
console.log(p.f()); // 5
```

## prototype

모든 함수 객체는 prototype이라는 property를 갖는다

```javascript
var carProto = {
  name : "null",
  model : "null",
  madeBy : "null",
  color : "null",
  getModel : function() {
    return this.model;
  },
  toString : function() {
    return this.name + this.model + this.madeBy + this.color;
  }
};

var Avante = function() {
  this.name = "Avante";
  this.model = "2015";
  this.color = "white";
  this.madeBy = "Hyundai";
};

// Avante의 prototype property에 carProto객체를 지정
Avante.prototype = carProto;

var myCar = new Avante();
myCar.toString(); // "Avante2015Hyundaiwhite"
```

## private, protected

javascript는 접근 제어자(public, private, protected)를 제공하지 않기 때문에,

기본적으로 모든 객체의 속성은 public이다

```javascript
// private은 일반적으로 property에 _를 사용한다.
function Point(x, y) {
  this._x = x;
  this._y = y;
}

Point.property.getX = function() {
  return this._x;
}

Point.property.setX = function(x) {
  this._x = x;
}

Point.property.getY = function() {
  return this._y;
}

Porint.property.setY = function(y) {
  this._y = y;
}
```

## call, apply, bind

함수를 실행시키는 컨텍스트(함수가 실행되거나 변수를 참조할때의 환경)를 직접 지정.

this변수에 연결될 객체를 선택

apply, call 둘다 첫번째 인자는 활성 객체이며 두번째 인자부터만 다름

apply는 함수를 실행할 인자를 배열 형식으로 절달, call은 인자를 하나하나 나열하는 방식

* apply()

```javascript
function Computer(name, price) {
  this.name = name;
  this.price = price;
}

function Notebook(name, price) {
  // Notebook객체와 arguments(name, price)를 parameter로 넘겨줌
  Computer.apply(this, arguments);
  this.type = "portable";
}

var lenovo = new Notebook("w541", 2000000);
// Notebook {name: "w541", price: 2000000, type: "portable"}
```

* bind()

새로운 함수를 생성하고, 그 함수가 호출 되었을 때 예약어인 this에 연속된 arguments값들을 설정

  ```javascript
var maker = 'SAMSUNG';
var other = {
  maker : 'LG'
}
function getMaker() {
  return this.maker;
}
getMaker(); // SAMSUNG this.maker는 전역변수인 SAMSUNG

var afterBind = getMaker.bind(other);
afterBind(); // LG
```
