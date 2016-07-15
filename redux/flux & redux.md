# FLUX

**사용자 인터페이스를 만들기 위한 어플리케이션 아키텍쳐**

단방향 데이터 흐름을 활용해 뷰 컴포넌트를 구성하는 React를 보완하는 역할을 함

Flux application은 다음의 핵심적인 세가지 부분으로 구분되어있다.

1. Dispatcher

2. Stores

3. View(React component)

** Flux는 데이터의 흐름이 단방향. **

React view에서 user interact -> dispatcher를 통해 user의 action 전파 -> action이 전파되면 store에서 action에 영향이 있는 모든 view를 갱신

## ** Flux 구조와 데이터 흐름 **

![flux구조와 데이터 흐름](http://haruair.github.io/flux/img/flux-simple-f8-diagram-with-client-action-1300w.png)

* ### ** Dispatcher **

flux application의 모든 data 흐름을 관리하는 허브역할.

어떤 액션이 발생하면 dispatcher로 message(or action object)가 전달되고 dispatcher에 등록된 함수를 통해 해당 message를 store에 전달.

다른 구성요소와 달리 application에서 한개의 instance만 사용함.

* ### ** Store **

store는 application의 상태를 저장

* ### ** View **

store의 변경사항을 감지할 수 있는 event listener를 store에 등록하고, store에 변화가 발생하면 view에 반영

---

![redux](https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67)
