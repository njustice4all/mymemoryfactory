# ** CSS (Cascading Style Sheet) **

document가 사용자에게 어떻게 보여질가를 기술하는 언어

## why CSS?

* 중복 방지

* 유지보수 편리

* 같은 내용에 대해 다른 용도로 보이기 위한 다른 스타일 적용

### Selector

* Class - 하나 이상의 elements에서 동일한 class변수를 가질 수 있다.

* id - document내에서 유일해야함

## Pseudo-classes Selector

elementrk 이후에 설렉터에 적용될 것이다! 라는 특별한 상태를 나타낸다.

Pseudo-classes의 종류는 다음과 같다.

* :link - 링크

* :visited - 페이지방문

* :active - 무언가 동작할때 ex) a tag에서 마우스를 클릭할때...

* :hover - 마우스오버

* :focus - 포커스상태

* E:first-child - 첫번째 자식

* E:nth-child(n) - 부모의 n번째 자식이면서, E요소일때..

* E:nth-last-child(n) - 마지막자식부터... -n+3 => 마지막자식부터3개

* E:nth-of-type(n) - 같은 유형의 n번째 형제인 E요소..

* E:first-of-type - 같은 유형의 첫번째 형제

* E:last-of-type - 같은 유형의 마지막 형제

* :empty - 선택한 element가 비었을때..

* :target - 선택한 element의 타겟에 액션을 취한다...

* :checked - input tag들을 check했을때 액션을 취한다...

* :enabled - input tag가 enabled일때..

* :disabled - 반대

# ** Selector Relationship **

* A E => E는 A의 후손(손자 전부 포함)

* A > E => E는 A의 자식

* E:first-child => E는 자식중 첫번째

* B + E => E와 B는 형제(부모가 같다)

# Group Selector

콤마로 구분한다.

```css
/* h1, h2, h3를 전부 red로... */
h1, h2, h3 {
  color: red;
}
```

# ** Element Position **

* margin - 바깥여백

* border - 테두리

* padding - 내부여백

* element - 요소

![box](https://mdn.mozillademos.org/files/8685/boxmodel-(3))

### Float

elements를 강제로 왼쪽/오른쪽으로 정렬시킨다. element의 위치와 크기를 쉽게 변경함

나머지 contents는 float속성의 element주변으로 떠있게 된다

clear속성을 통해서 나머지 contents들을 float element로 부터 떨어져 위치하도록 한다.

### Media Query

![MediaQuery](http://www.nextree.co.kr/wp-content/uploads/2014/03/jsseo-140329-CSS-02.png)

only는 뒤의 조건만.. not은 뒤의 조건을 제외한 조건

only키워드는 큰 의미는 없지만 미디어 쿼리를 지원하는 브라우저를 대상으로하면 적어주는게 좋다.

** 미디어 타입의 종류는 다음과 같다. **

* all: 모든 미디어

* aural: 음성 합성장치

* braille: 점자 표시 장치

* handheld: 손으로 들고 다니면서 볼 수 있는 작은 스크린에 대응하는 용도

* print: 인쇄용

* projection: 프로젝터

* screen: 대부분의 컴퓨터와 모바일 기기

* tty: 디스플레이 능력이 한정된 텔렉스, 터미널등 고정된 글자를 사용하는 미디어

* tv: 음성과 영상이 동시에 출력되는 장치

* embrossed: 페이지에 인쇄된 점자 표시 장치

** 미디어 타입의 속성과 값 **

* width: 웹페이지의 가로

* height: 웹페이지의 세로

* device-width: 단말기의 물리적 가로길이.

* device-height: 단말기의 물리적 세로길이

* orientation: width와 height를 구해서 width가 더 크면 landscape 아니면 portrait

* aspect-ratio: 화면비율

* device-aspect-ratio: 단말기의 물리적 화면 비율

* color-index: 기기의 색상수

* monochrom: 기기가 흑백일때 픽셀당 비트수

* resolution: 지원하는 해상도 판단. 값으로 dpi(dot per inch)나 dpcm(dot per cm)

* color: 기기의 비트수
