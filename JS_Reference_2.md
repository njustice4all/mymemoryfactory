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
