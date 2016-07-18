# **FLUX**

**사용자 인터페이스를 만들기 위한 어플리케이션 아키텍쳐**

단방향 데이터 흐름을 활용해 뷰 컴포넌트를 구성하는 React를 보완하는 역할을 함

Flux application은 다음의 핵심적인 세가지 부분으로 구분되어있다.

1. Dispatcher

2. Stores

3. View(React component)

**Flux는 데이터의 흐름이 단방향.**

React view에서 user interact -> dispatcher를 통해 user의 action 전파 -> action이 전파되면 store에서 action에 영향이 있는 모든 view를 갱신

## **Flux 구조와 데이터 흐름**

![flux구조와 데이터 흐름](http://haruair.github.io/flux/img/flux-simple-f8-diagram-with-client-action-1300w.png)

* **Dispatcher**

flux application의 모든 data 흐름을 관리하는 허브역할.

어떤 액션이 발생하면 dispatcher로 message(or action object)가 전달되고 dispatcher에 등록된 함수를 통해 해당 message를 store에 전달.

다른 구성요소와 달리 application에서 한개의 instance만 사용함.

* **Store**

store는 application의 상태를 저장

* **View**

store의 변경사항을 감지할 수 있는 event listener를 store에 등록하고, store에 변화가 발생하면 view에 반영

---

# **REDUX**

Redux는 Flux 아키텍쳐의 구현체 중 하나.

Redux는 다른 Flux 아키텍쳐의 구현체와 비교해 사용법이 단순하고 용량도 2kb정도.

보통 React와 함께 많이 사용하지만 의존성이 없어 React와 상관없이 독립적으로 사용할 수 있다.

```javascript
import { createStore } from 'redux'

// reducer
function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

// store
let store = createStore(counter)

store.subscribe(() =>
  console.log(store.getState())
)

// action
store.dispatch({ type: 'INCREMENT' }) // 1
store.dispatch({ type: 'INCREMENT' }) // 2
store.dispatch({ type: 'DECREMENT' }) // 1
```

## **Action과 Action 생성자**

### **action**

redux에서 action은 application에서 store로 보내는 데이터 묶음

<code>store.dispatch()</code>를 통해 action들을 보낼 수 있다.

```javascript
// 새 할일 추가를 나타내는 액션
const ADD_TODO = 'ADD_TOTO'

{
  type: ADD_TOTO,
  text: 'blah blah'
}
```

### **action creator**

action creator는 말 그대로 액션을 만드는 함수다.

```javascript
// redux의 action creator는 단순히 액션만 반환한다.
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}
```

실제로 action을 store에 보내려면 결과값을 <code>dispatch()</code>에 담아 넘긴다.

```javascript
dispatch(addTodo(text))
```

<code>action.js</code>

```javascript
// 액션타입들
export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// 다른 상수
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// 액션 생성자들
export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
```

## **Reducer**

<code>dispatch()</code>를 통해서 전달된 action은 무언가 일어난다는 사실만 알고있고, 그 일어난 일의 결과는 모른다. 따라서 해당 action으로 인해 application의 상태가 어떻게 바뀌는가에 대한 일은 Reducer가 담당한다.

Redux에서 application의 모든 상태는 하나의 객체에 저장된다.

```javascript
{
  visibilityFilter: 'SHOW_ALL',
  todos: [{
    text: 'blah blah',
    completed: true,
  }, {
    text: 'hello redux',
    completed: false
  }]
}
```

**Reducer는 이전 상태와 액션을 parameter로 받아서 다음 상태를 반환하는 순수함수다.**

redux는 처음에 reducer를 <code>undefined</code>상태로 호출한다.

```javascript
import { VisibilityFilters } from './actions'

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

// 이전 상태와 액션
function todoApp(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }
  return state
}
```

더 간단하게 작성하기

```javascript
// state가 undefined면 initialState
function todoApp(state = initialState, action) {
  return state
}
```

```javascript
const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

function todoApp(state = initialState, action) {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    return Object.assign({}, state, {
      visibilityFilter: action.filter
    });
  case ADD_TODO:
    return Object.assign({}, state, {
      todos: [...state.todos, {
        text: action.text,
        completed: false
      }]
    });    
  default:
    return state; // 초기상태
  }
}
```

<code>COMPLETE_TODO</code>핸들러 구현

```javascript
case COMPLETE_TODO:
  return Object.assign({}, state, {
    todos: [
      ...state.todos.slice(0, action.index),
      Object.assign({}, state.todos[action.index], {
        completed: true
      }),
      ...state.todos.slice(action.index + 1)
    ]
  });
```

<code>combineReducers()</code>사용

```javascript
// 이 코드는 아래와 동일하다
export default function todoApp(state, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  };
}

import { combineReducers } from 'redux';

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
```

<code>reducers.js</code>

```javascript
import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    return action.filter;
  default:
    return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
  case ADD_TODO:
    return [...state, {
      text: action.text,
      completed: false
    }];
  case COMPLETE_TODO:
    return [
      ...state.slice(0, action.index), // 이해가 가지 않는다.
      Object.assign({}, state[action.index], {
        completed: true
      }),
      ...state.slice(action.index + 1)
    ];
  default:
    return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
```

## **Store**

store는 action과 reducer를 함께 가져오는 객체. store는 다음과 같은 일을 해야한다.

* application의 상태 저장

* <code>getState()</code>를 통해 상태에 접근

* <code>dispatch(action)</code>를 통해 상태 수정

* <code>subscribe(listner)</code>를 통해 리스너 등록

이전에 <code>combineReducers()</code>를 통해 하나로 합친 reducer들을 가져와서 <code>createStore()</code>에 넘기기만 하면 된다.

<code>index.js</code>

```javascript
import { createStore } from 'redux';
import todoApp from './reducers';

let store = createStore(todoApp);
```
