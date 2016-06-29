# 정규표현식(Regular Expression)

## 특정한 문자열의 집합을 표현하는데 사용하는 형식의 언어

POSIX 정규표현식과 확장된 POSIX에서 확장된 Perl방식의 PCRE가 대표적이며, 이외에도 수많은 정규표현식이 있지만 약간의 차이만 존재하며 거의 비슷하다. 정규표현식에서 사용하는 기호를 Meta문자라 한다. Meta문자는 표현식 내부에서 특정한 의미를 갖는 문자를 말한다.

* 공통적인 기본 Meta문자

![기본Meta문자](http://www.nextree.co.kr/wp-content/uploads/2014/01/jhkim-140117-RegularExpression-21.png)

* 문자클래스 [ ]

  문자클래스는 그 내부에 해당하는 문자열의 범위 중 한 문자만 선택한다는 의미

  문자클래스 내부에서는 Meta문자를 사용할 수 없거나 의미가 다르다

![문자클래스](http://www.nextree.co.kr/wp-content/uploads/2014/01/jhkim-140117-RegularExpression-191.png)

* 대표적인 POSIX 문자클래스

![POSIX 문자클래스](http://www.nextree.co.kr/wp-content/uploads/2014/01/jhkim-140117-RegularExpression-08.png)

* [:cntrl:] : 아스키 제어문자(0~31번, 127번)

* [:print:] : 출력 가능한 모든 문자

* [:xdigit:] : 모든 16진수 숫자

## Javascript에서 정규표현식 사용법

* RegExp 객체를 이용하는 방법(정규표현식이 자주 변경되는 경우에 많이 사용)

```javascript
var objectInitializer = new RegExp('정규표현식',['Flag']);
```

* 객체 초기화를 사용하는 방법(입력된 표현식이 거의 바뀌지 않는 경우에 많이 사용)

```javascript
var regExp = /정규표현식/[Flag];
```

## Flag의 종류

자주 사용하는 Flag 3개. Flag를 사용하지 않을 수도 있으며 Flag를 사용하지 않는 경우에는 문자열 내에 검색대상이 많더라도 **한번만** 찾고 끝난다.

![Flag종류](http://www.nextree.co.kr/wp-content/uploads/2014/01/jhkim-140117-RegularExpression-09.png)

* x : 공백을 무시하고 주석허용

* s : 개행문자도 포함해서 찾음

## String 매서드 종류

* substr()

substr(시작인덱스, 길이)

* substring()

substring(시작인덱스, 종료인덱스(미만))

* match()

정규표현식에 맞는 문자열을 찾고 해당 값을 배열로 리턴한다.

기존의 배열은 바뀌지 않는다.

```javascript
var str = "The rain in SPAIN stays mainly in the plain";
str.match(/ain/g);
```

## Array 매서드 종류

* sort()

알파벳이나 숫자로 정렬가능(오름차순, 내림차순)

기존의 배열이 바뀐다

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // ["Apple", "Banana", "Mango", "Orange"]

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b}); // [1, 5, 10, 25, 40, 100] b-a는 내림차순...
```

* reduce()

기존 배열에 있던 값을 하나로 줄일때 사용한다.

reduce()함수는 배열의 왼쪽에서 오른쪽으로 for each 함수를 실행한다.

function의 return값은 accumulator라는 곳에 저장된다.

기존의 배열은 바뀌지 않는다.

array.reduce(function(total, currentValue), initialValue)

total : 시작값이나 이전 함수의 리턴값

currentValue : 현재 요소의 값

initialValue : 첫 토탈값. 지정 안하면 첫 토탈값은 해당 배열의 첫번째 인덱스값

```javascript
var numbers = [15.5, 2.3, 1.1, 4.7];

function getSum(total, num) {
    return total + Math.round(num);
}

numbers.reduce(getSum, 0); // 24
```

* some()

기존 배열에 있던 값중에 하나라도 임의의 함수실행을 통과하면 true, 그렇지 않으면 false

기존의 배열은 바뀌지 않는다.

```javascript
var ages = [16, 18, 22, 28];

function checkAdult(age) {
  return age > 19;
}

ages.some(checkAdult); // true
```

* slice()

배열에서 선택한 요소만큼 새로운 배열이 생성된다.

기존의 배열은 바뀌지 않는다.

```javascript
var fruits = ["Apple", "Grape", "Banana", "Orange", "Lemon", "Mango"];
fruits.slice(1, 3); // ["Grape", "Banana"]  1부터 3전까지
```

* splice()

배열에서 추가나 삭제를 할때 사용한다.

기존의 배열이 바뀐다.

```javascript
var fruits = ["Apple", "Grape", "Banana", "Orange", "Lemon", "Mango"];
// splice(인덱스, 지울 갯수, 아이템1, ..., 아이템x)
fruits.splice(2, 0, "키위", "수박"); // 인덱스2에서 하나도 안지우고 키위와 수박을 넣는다.
```

## Mutable / Immutable

Primitive values

오브젝트를 제외한 변경 불가능한 타입들

***Immutable***

1. Boolean

2. Null

3. Undefined

4. number

5. String : 한번 문자열이 생성되면, 그 문자열을 수정할수 없다.
