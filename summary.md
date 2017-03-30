# javascript 기본들...
* 이벤트 중심의 언어
* javascript는 컴파일이 필요없는 인터프리터 언어(브라우저에 의해 실행)
* 모든 객체는 prototype을 가지고있음

# React
* UI 컴포넌트를 만들고 재사용할 수 있다.
* virtual dom을 사용하여 이전 상태와 현재 상태를 비교하며 렌더링한다.
* 단방향 데이터흐름 유지보수 쉽다.
* constructor -> componentWillMount -> render -> componentDidMount -> componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate -> componentDidUpdate -> componentWillUnmount

# Redux
* flux 아키텍쳐의 구현체
* React의 state를 통합적으로 관리
* action -> dispatch -> store -> view

# JWT
* json web token, header + payload + signature로 구분되어있음
* 서버에서 사용자에게 토큰을 발급해주고
* 사용자는 서버에 리퀘스트 할 시 토큰을 담아서 보냄

# Webpack, Babel
* javascript 모듈관리 + 빌드 자동화도구 (미니+어글리)
* 바벨 - 트랜스파일러
* es6문법으로 작성된 코드를 모던 웹브라우저에서도 사용할 수 있게 변환해줌

# rest api 활용
* 계층구조를 가지며 resource를 명시
* post/get/put/delete를 통해 해당 resource에대한 CRUD
* 장점 - 사용하기 쉽다.

# JIRA 이슈관리, 티켓주도 개발
* 이슈를 목록으로 정리하고
* 우선순위를 정하고
* 해결상황을 한눈에 볼 수 있도록
* JIRA는 이런것들을 할 수 있게 해주는 Tool

# 순수함수
* 같은 입력에 항상 같은 출력
* 외부 상태와 무관
* 사이드 이펙트가 없다

# RxJS란
* 비동기 코드를 쉽게 작성할수 있게 해준다

# vue.js, elm
* elm 순수함수, 모든 데이터는 immutable
* javascript로 컴파일됨

# 백엔드 제작경험
* java spring framework사용했었음
* nodejs와 express책이나 강좌를 보면서 흉내내는 수준

# 프로젝트시 어려웠던점
* wordpress 처음써본거
* redux 상태 설계
* 초반엔 javascript문법이나 react사용법

# 내 질문
* 개발팀원은 몇명
* 서비스 사용자수는 증가 추세인가
* 나에게 바라는것
* 월급 안밀림?
* 퇴사자가 많은데 이유가?
