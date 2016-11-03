# component spec과 lifecycle

## component specification

* render()

호출되면 this.props와 this.state를 토대로 하나의 자식 element를 return

이 자식 element는 DOM component의 가상 표현( JSX문법? ) 또는 직접 정의한 component가 될 수 있다.

아무것도 렌더링 되게 하지 않으려면 null이나 false를 return

render()는 component의 상태를 변경하지 않고, 여러번 호출해도 같은 결과가 나와야하고
브라우저와 상호작용 하지 않아야한다.

브라우저와 상호작용을 하려면 componentDidMount나 다른 lifecycle메소드에서 사용해야한다.

* getInitialState()

prop는 외부에서 전달한 값이지 그 component가 자체적으로 관리하는 값이 아니므로 내부에서 변경하면 안됨.

props는 immutable하지만 state는 mutable한 값을 정의할 수 있다.

getInitialState()는 component가 mount되기전에 한번 호출됨.

리턴값은 this.state의 초기값으로 사용

getInitialState()를 이용해 state의 초기값을 반환하고 데이터 변경이 있을시 this.setState()로 갱신함

상태가 갱신되면 component가 rerender되어 UI가 갱신됨. 이때, 자식 component도 함께 rerender됨

```javascript
let Counter = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    };
  },
  onClick: function() {
    this.setState({ count: this.state.count + 1 });
  },
  render: function() {
    return (
      <div>
        <span>{this.state.count}</span>
        <button onClick={this.onClick}>click me</button>
      </div>
    );
  }
});
```

* getDefaultProps()

getDefaultProps()에서 리터럴 객체를 반환하면 기본값으로 지정됨.

component instance가 만들어질 때 호출되는것이 아니라 component가 정의될 때만 호출

```javascript
let Hello = React.createClass({
  getDefaultProps: function(){
    return {
      name: '안녕 리엑트'
    };
  },
  render: function() {
    return (
      <div>hello {this.props.name}</div>
    );
  }
});
```

* propTypes

component의 prop은 외부에서 값을 지정받기 때문에 validation이 필요함.

React.js는 propTypes로 prop에 대한 타입 제약을 지정할 수 있다.

```javascript
let Avatar = React.createClass({
  propTypes: {
    name:   React.PropTypes.string.isRequired, // 문자고 필수다
    id:     React.PropTypes.number.isRequired, // 숫자고 필수다
    width:  React.PropTypes.number.isRequired, // 숫자고 필수다
    height: React.PropTypes.number.isRequired, // 숫자고 필수다
    alt:    React.PropTypes.string             // 문자고 필수아님
  },
  render() {
    let src = `/img/avatar/${this.props.id}.png`; // ${}문법 질문
    return (
      <div>
        <img src={src} width={this.props.width} height={this.props.height} alt={this.props.alt} />
        <span>{this.props.name}</span>
      </div>
    );
  }
});

React.PropTypes.array           // 배열
React.PropTypes.bool.isRequired // Boolean, 필수
React.PropTypes.func            // 함수
React.PropTypes.number          // 정수
React.PropTypes.object          // 객체
React.PropTypes.string          // 문자열
React.PropTypes.node            // Render가 가능한 객체
React.PropTypes.element         // React Element
React.PropTypes.instanceOf(XXX) // XXX의 instance
React.PropTypes.oneOf(['foo', 'bar']) // foo 또는 bar
React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.array]) // 문자열 또는 배열
React.PropTypes.arrayOf(React.PropTypes.string)  // 문자열을 원소로 가지는 배열
React.PropTypes.objectOf(React.PropTypes.string) // 문자열을 값으로 가지는 객체
React.PropTypes.shape({                          // 지정된 형식을 충족하는지
  color: React.PropTypes.string,
  fontSize: React.PropTypes.number
});
React.PropTypes.any.isRequired  // 어떤 타입이든 가능하지만 필수

// 커스텀 제약도 정의 가능
customPropType: function(props, propName, componentName) {
  if (!/^[0-9]/.test(props[propName])) {
    return new Error('Validation failed!');
  }
}
```

* mixins

lifecycle보고 다시 공부할것

```javascript
var SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.intervals.forEach(clearInterval);
  }
};

var TickTock = React.createClass({
  mixins: [SetIntervalMixin], // 믹스인 사용
  getInitialState: function() {
    return {seconds: 0};
  },
  componentDidMount: function() {
    this.setInterval(this.tick, 1000); // 믹스인에 있는 메소드를 호출
  },
  tick: function() {
    this.setState({seconds: this.state.seconds + 1});
  },
  render: function() {
    return (
      <p>
        React has been running for {this.state.seconds} seconds.
      </p>
    );
  }
});
```

* statics

static객체는 instance를 하나도 만들지 않은 시점에서도 호출할 수 있고, component의 props나 state에 접근할 수 없다.

```javascript
let MyComponent = React.createClass({
  statics: {
    customMethod: function(foo) {
      return foo === 'bar';
    }
  },
  render: function() {
  }
});

console.log(MyComponent.customMethod('bar')); // true
```

* displayName

클래스에 displayName이 정의되어있지 않으면 JSX는 변수명을 displayName으로 간주함

```javascript
// 입력 (JSX):
var Nav = React.createClass({ });
// 출력 (JS):
var Nav = React.createClass({displayName: "Nav", });
```

## lifecycle method

![component lifecycle](https://velopert.com/wp-content/uploads/2016/03/f.png)

constructor -> componentWillMount -> render -> componentDidMount -> 상태변화
-> componentWillReceiveProps(nextProps) -> shouldComponentUpdate(nextProps, nextState) -> componentWillUpdate(nextProps, nextState)
-> componentDidUpdate(prevProps, prevState)

React.js는 component의 상태변화에 따라 호출되는 다양한 메소드를 제공한다.

자주 사용하는 메소드는 componentDidMount()나 componentWillUnmount()이다.

* componentWillMount() 마운트시

***최초 렌더링이 일어나기 직전에 클라이언트 및 서버에서 한번 호출*** 초기화 처리를 하는데 사용한다.

이 메소드 안에서 setState를 호출하면, render()에서 업데이트된 state를 확인할 수 있고 state가 변함에도 불구하고 render()가 한번만 실행

* componentDidMount() 마운트시

***최초 렌더링이 일어난 다음 클라이언트에서만 한번 호출*** DOM과 관련된 초기화를 하는데 사용

DOM을 다루는 것 외에 Ajax요청이나 setInterval등 server-side rendering시에 불필요한 초기화 처리를 한다.

자식 컴포넌트의 componentDidMount() 메소드는 부모 컴포넌트보다 먼저 호출됨.

* componentWillReceiveProps(nextProps) 업데이트시

component가 새로운 props를 받을때 실행됨. 최초 렌더링시에는 호출되지 않음

prop에 따라 state를 업데이트 해야 할 때 사용하면 유용함

* shouldComponentUpdate(nextProps, nextState) 업데이트시

prop나 state가 변경 되었을때, rerendering을 할지 말지 정하는 메소드

rerendering하면 true 아니면 false

* componentWillUpdate(nextProps, nextState) 업데이트시

component가 update되기 전에 실행됨

이 메소드 안에서 this.setState()를 사용하면 안됨 - 무한루프에 빠짐

* componentDidUpdate(prevProps, prevState) 업데이트시

component의 update가 DOM에 반영된 후(rerendering 후) 호출됨. 최초 rendering시에는 호출 안됨.

component가 update된 후 DOM을 조작해야 하는 경우에 사용

* componentWillUnmount()

component가 DOM에서 사라지면 실행되는 메소드(정확히 말하면 component가 DOM에서 마운트 해제되기 직전에 호출)

### LifeCycle의 예제...

```javascript
let App = React.createClass({
  getInitialState: function() {
    return {
      number: 0,
      show: false
    };
  },
  _increase: function() {
    this.setState({
      number: this.state.number + 1
    });
  },
  _show: function() {
    this.setState({
      show: true
    });
  },
  _unmount: function() {
    this.setState({
      number: 0,
      show: false
    });
  },
  render: function() {
    let component = (<Card number={this.state.number} />);
    return (
      <div>
        <Button caption="Show Card" customClass="green" onClick={this._show.bind(this)} />
        <Button caption="Increase Number" customClass="blue" onClick={this._increase.bind(this)} />
        <Button caption="Unmount Card" customClass="red" onClick={this._unmount.bind(this)} />
        {this.state.show ? component : ''}
      </div>
    );
  }
});

let Card = React.createClass({
  componentWillMount: function() {
    console.log('카드 컴포넌트가 곧 마운트 될꺼야');
  },
  componentDidMount: function() {
    console.log('컴포넌트가 마운트 됐다');
  },
  componentWillReceiveProps: function(nextProps) { // nextProps, nextState, prevProps, prevState는 모두 객체
    console.log('상태변화가 감지됐다 컴포넌트가 nextProps: ' + nextProps.number + ' 를 받을꺼다');
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    console.log('받았으면 업데이트를 할지 말지 결정해야겠지?');
    return true;
  },
  componentWillUpdate: function(nextProps, nextState) {
    console.log('결정했으면 이제 업데이트 할꺼야');
  },
  componentDidUpdate: function(prevProps, prevState) {
    console.log('컴포넌트가 업데이트 됐어. 이전props는: ' + prevProps.number);
  },
  componentWillUnmount: function() {
    console.log('이제 카드 컴포넌트를 언마운트 할꺼야');
  },
  render: function() {
    console.log('카드 컴포넌트 렌더링됨!! (DOM에 올라감)');
    return (
      <div className="ui card">
        <div className="content">
            number: {this.props.number} // 왜 this.state.number가 아니고 props인가?
        </div>
      </div>
    );
  }
});

let Button = React.createClass({
  render: function() {
    let className = 'ui button ' + this.props.customClass;
    return (
      <div onClick={this.props.onClick} className={className}>
        {this.props.caption}
      </div>
    );
  }
});
```
