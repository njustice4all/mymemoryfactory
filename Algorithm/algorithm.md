# tryhelloworld.co.kr 에서 풀었던 JS알고리즘 문제


* 핸드폰번호 가리기
> 별이는 헬로월드텔레콤에서 고지서를 보내는 일을 하고 있습니다.
> 개인정보 보호를 위해 고객들의 전화번호는 맨 뒷자리 4자리를 제외한 나머지를 x로 바꿔야 합니다.
> 전화번호를 문자열 s로 입력받는 hide_numbers함수를 완성해 별이를 도와주세요
> 예를들어 s가 "01033334444"면 "xxxxxxx4444"를 리턴하고, "027778888"인 경우는 "xxxxx8888"을 리턴하면 됩니다.

```javascript
function hide_numbers(s) {
  var result = "";
  for (var i = 0; i < s.length; i++) {
    if (i < s.length - 4) {
      result += '*';
    } else {
      result += s[i];
    }
  }
  return result;
}

console.log("결과 : " + hide_numbers('01033334444'));
```

* 평균 구하기
> def average(list):
함수를 완성해서 매개변수 list의 평균값을 return하도록 만들어 보세요.
어떠한 크기의 list가 와도 평균값을 구할 수 있어야 합니다.

```javascript
function average(array){
  var sum = array.reduce(function(a, b) {
    return a + b;
  });
  return sum / array.length;
}

var testArray = [5,3,4] 
console.log("평균값 : " + average(testArray));
```

* 짝수와 홀수
> evenOrOdd 메소드는 int형 num을 매개변수로 받습니다.
num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하도록 evenOrOdd에 코드를 작성해 보세요.
num은 0이상의 정수이며, num이 음수인 경우는 없습니다.
>

```javascript
function evenOrOdd(num) {
  var result = 'Odd';
  if (num % 2 === 0) {
    result = 'Even';
  }
  return result;
}

console.log("결과 : " + evenOrOdd(2));
console.log("결과 : " + evenOrOdd(3));
```

* 정수 제곱근 판별하기
> nextSqaure함수는 정수 n을 매개변수로 입력받습니다.
n이 임의의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 임의의 정수 x의 제곱이 아니라면 'no'을 리턴하는 함수를 완성하세요.
예를들어 n이 121이라면 이는 정수 11의 제곱이므로 (11+1)의 제곱인 144를 리턴하고, 3이라면 'no'을 리턴하면 됩니다.

```javascript
function nextSqaure(n) {
  var result = 'no';
  var root = Math.sqrt(n);
  if (Number.isInteger(root) === true) {
    result = Math.pow((root + 1), 2);
  }
  return result;
}

console.log("결과 : " + nextSqaure(121));
```

* 역삼각형 출력하기
> printReversedTriangle 메소드는 양의 정수 num을 매개변수로 입력받습니다.
다음을 참고해 8로 높이가 num인 삼각형을 문자열로 리턴하는 printReversedTriangle 메소드를 완성하세요

```javascript
function printReversedTriangle(num) {
  let result = ''
  for (let i = 0; i < num; i++) {
    for (let j = num; j > i; j--) {
      result += '*';
    }
    result += '\n';
  }
  return result
}

console.log("결과 : " +'\n'+ printReversedTriangle(3));
```

* 수박수박수박수박수박수?
> water_melon함수는 정수 n을 매개변수로 입력받습니다.
길이가 n이고, 수박수박수...와 같은 패턴을 유지하는 문자열을 리턴하도록 함수를 완성하세요.
예를들어 n이 4이면 '수박수박'을 리턴하고 3이라면 '수박수'를 리턴하면 됩니다.

```javascript
function waterMelon(n){
  var result = "";
  for (var i = 0; i < n; i++) {
    i % 2 === 0 || i === 0 ? result += '수' : result += '박';
  }
  return result;
}

console.log("n이 3인 경우: "+ waterMelon(3))
console.log("n이 4인 경우: "+ waterMelon(4))
```

* 서울에서김서방찾기
> findKim 함수(메소드)는 String형 배열 seoul을 매개변수로 받습니다.
seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하세요.
seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

```javascript
function findKim(seoul){
  var idx = 0;
  idx = seoul.indexOf('Kim');

  return "김서방은 " + idx + "에 있다";
}

console.log(findKim(["Queen", "Tod", "Kim"]));
```

* 삼각형 출력

```javascript
function printTriangle(num) {
    var result = ''
    for (var i = 0; i < num; i++) {
      for (var j = 0; j < i + 1; j++) {
        result += '*';
      }
      result += '\n';
    }
    return result
}

console.log(printTriangle(5));
```

* 문자열 다루기 기본
> alpha_string46함수는 문자열 s를 매개변수로 입력받습니다.
s의 길이가 4혹은 6이고, 숫자로만 구성되있는지 확인해주는 함수를 완성하세요.
예를들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다

```javascript
function alpha_string46(s) {
  var result = false;
  if ( (s.length === 4 || s.length === 6) && Number.isInteger(parseInt(s)) ) {
    result = true;
  }
  return result;
}

console.log(alpha_string46("a234"));
```

* 문자열 내 p와 y의 개수
> numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 매개변수로 입력받습니다.
s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 리턴하도록 함수를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
예를들어 s가 "pPoooyY"면 True를 리턴하고 "Pyy"라면 False를 리턴합니다.

```javascript
function numPY(s){
  var result = false;
  var pCnt = 0;
  var yCnt = 0;
  var temp = s.toLowerCase().split('');

  for (var i in temp) {
    if (temp[i] === 'p') {
      pCnt++;
    } else if (temp[i] === 'y') {
      yCnt++;
    }
  }

  if (pCnt === yCnt) {
    result = true;
  }
  return result;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(numPY("pPoooyY"))
console.log(numPY("Pyy"))
```

* 피보나치 수
> 피보나치 수는 F(0) = 0, F(1) = 1일 때, 2 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 점화식입니다. 2 이상의 n이 입력되었을 때, fibonacci 함수를 제작하여 n번째 피보나치 수를 반환해 주세요. 예를 들어 n = 3이라면 2를 반환해주면 됩니다.

```javascript
function fibonacci(num) {
	var answer = 0;
  var firstNum = 0,
      secondNum = 1;

  for (var i = 0; i < num; i++) {
    answer = firstNum + secondNum;
    secondNum = firstNum;
    firstNum = answer;
  }
	return answer;
}

console.log(fibonacci(3))
```

* 약수의 합
> 어떤 수를 입력받아 그 수의 약수를 모두 더한 수 sumDivisor 함수를 완성해 보세요. 예를 들어 12가 입력된다면 12의 약수는 [1, 2, 3, 4, 6, 12]가 되고, 총 합은 28이 되므로 28을 반환해 주면 됩니다.

```javascript
function sumDivisor(num) {
	var answer = 0;
  var temp = [];
  for (var i = 1; i <= num; i++) {
    if (num % i === 0) {
      temp.push(i);
    }
  }
  answer = temp.reduce(function(a, b) {
    return a + b;
  })

	return answer;
}

console.log(sumDivisor(12));
```

* 최솟값 만들기
> 자연수로 이루어진 길이가 같은 수열 A,B가 있습니다. 최솟값 만들기는 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱한 값을 누적하여 더합니다. 이러한 과정을 수열의 길이만큼 반복하여 최종적으로 누적된 값이 최소가 되도록 만드는 것이 목표입니다.
예를 들어 A = [1, 2] , B = [3, 4] 라면
 A에서 1, B에서 4를 뽑아 곱하여 더합니다.
 A에서 2, B에서 3을 뽑아 곱하여 더합니다.
수열의 길이만큼 반복하여 최솟값 10을 얻을 수 있으며, 이 10이 최솟값이 됩니다.
수열 A,B가 주어질 때, 최솟값을 반환해주는 getMinSum 함수를 완성하세요.

```javascript
function getMinSum(A,B){
	var answer = 0;

  var asc = A.sort(function(a, b) {
    return a - b;
  });

  var desc = B.sort(function(a, b) {
    return b - a;
  });

  for (var i = 0; i < asc.length; i++) {
    answer += (asc[i] * desc[i]);
  }

  return answer;
}

//아래 코드는 테스트를 위한 출력 코드 입니다.
var tA = [1,2],
    tB = [3,4];

console.log(getMinSum(tA,tB));
```

* 2016년
> 2016년 1월 1일은 금요일입니다. 2016년 A월 B일은 무슨 요일일까요? 두 수 A,B를 입력받아 A월 B일이 무슨 요일인지 출력하는 getDayName 함수를 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각
SUN,MON,TUE,WED,THU,FRI,SAT
를 출력해주면 됩니다. 예를 들어 A=5, B=24가 입력된다면 5월 24일은 화요일이므로 TUE를 반환하면 됩니다.

```javascript
function getDayName(a,b){
	var answer = "";
  var parseDate = new Date(2016, a - 1, b);
  var dayOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  for (var i = 0; i < 7; i++) {
    if (parseDate.getDay() === i) {
      answer = dayOfWeek[i];
    }
  }
	return answer;
}

console.log(getDayName(5,24));
```

* 하샤드수
> 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
Harshad함수는 양의 정수 n을 매개변수로 입력받습니다. 이 n이 하샤드수인지 아닌지 판단하는 함수를 완성하세요.
예를들어 n이 10, 12, 18이면 True를 리턴 11, 13이면 False를 리턴하면 됩니다.

```javascript
function Harshad(n){
  var result = false;
  var arr = n.toString().split('');
  for (var i in arr) {
    arr[i] = parseInt(arr[i]);
  }
  var divider = arr.reduce(function(a, b) {
    return a + b;
  });
  if (n % divider === 0) {
    result = true;
  }
  return result;
}

console.log(Harshad(18));
```

* 이상한 문자 만들기
> toWeirdCase함수는 문자열 s를 매개변수로 입력받습니다.
문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로 바꾼 문자열을 리턴하도록 함수를 완성하세요.
예를 들어 s가 "try hello world"라면 첫 번째 단어는 "TrY", 두 번째 단어는 "HeLlO", 세 번째 단어는 "WoRlD"로 바꿔 "TrY HeLlO WoRlD"를 리턴하면 됩니다.
주의 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단합니다.

```javascript
function toWeirdCase(s){
  var stringArr = s.split(' ');
  var temp = [];
  for (var i in stringArr) {
    temp.push(stringArr[i].split(''));
  }
  for (var i = 0; i < temp.length; i++) {
    for (var j = 0; j < temp[i].length; j++) {
      if (j % 2 === 0 || j === 0) {
        temp[i][j] = temp[i][j].toUpperCase();
      } else {
        temp[i][j] = temp[i][j].toLowerCase();
      }
    }
  }
  var result = [];
  for (var i in temp) {
    result.push(temp[i].join(''));
  }
  return result.join(' ');
}

console.log("결과 : " + toWeirdCase("try hello world"));
```

* 두 정수 사이의 합
> adder함수는 정수 a, b를 매개변수로 입력받습니다.
두 수와 두 수 사이에 있는 모든 정수를 더해서 리턴하도록 함수를 완성하세요. a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
예를들어 a가 3, b가 5이면 12를 리턴하면 됩니다.
a, b는 음수나 0, 양수일 수 있으며 둘의 대소 관계도 정해져 있지 않습니다.

```javascript
function adder(a, b){
  var result = 0,
      max,
      min;
  if (a > b) {
    max = a;
    min = b;
  } else if (b > a) {
    max = b;
    min = a;
  } else {
    result = a + b;
  }
  for (var i = min; i <= max; i++) {
    result += i;
  }
  return result;
}

console.log(adder(3, 5))
```

* 가장 긴 팰린드롬
> 앞뒤를 뒤집어도 똑같은 문자열을 palindrome이라고 합니다.
longest_palindrom함수는 문자열 s를 매개변수로 입력받습니다.
s의 부분문자열중 가장 긴 palindrom의 길이를 리턴하는 함수를 완성하세요.
예를들어 s가 "토마토맛토마토"이면 7을 리턴하고 "토마토맛있어"이면 3을 리턴합니다.

```javascript
function longest_palindrom(s){
  var result = 0,
      tempStr;
  for (var i = 0; i < s.length; i++) {
    for (var j = i + 1; j <= s.length; j++) {
      tempStr = s.substring(i, j);
      if (tempStr === reverseStr(tempStr)) {
        result = Math.max(tempStr.length, result);
      }
    }
  }

  return result;
}

function reverseStr(str) {
  var strTempArr = [];
  for (var i = str.length - 1; i >= 0; i--) {
    strTempArr.push(str[i]);
  }
  return strTempArr.join('');
}

console.log(longest_palindrom("토마토맛토마토"))
console.log(longest_palindrom("토마토맛있어"))
```

* 소수 찾기
> numberOfPrime 메소드는 정수 n을 매개변수로 입력받습니다.
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하도록 numberOfPrime 메소드를 만들어 보세요.
소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)
10을 입력받았다면, 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환
5를 입력받았다면, 1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환

```javascript
function numberOfPrime(n) {
	var result = 0,
      cnt;

	for (var i = 2; i <= n; i++) {
    cnt = 0;
    for (var j = 1; j <= i; j++) {
      if (i % j === 0) {
        cnt += 1;
      }
    }
    if (cnt === 2) {
      result += 1;
    }
}

	return result;
}

console.log(numberOfPrime(10));
```
