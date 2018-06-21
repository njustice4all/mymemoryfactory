# Top Level API

## React

- React.createClass(object specification)

주어진 object 정의에 따라 component class 를 만듬. component 는 **단 하나의 자식만을 return 하는 render 메소드를 구현.**

그 자식은 임의의 자식 구조를 가질수있음(children -> children -> children...)

```javascript
let Test = React.createClass({
  return (
    <div> // 부모
      <div> // 자식
        <p>hi</p> // 자식의 자식
      </div>
    </div>
  );
});
```

- React.createElement()

ReactElement createElement(
string/ReactClass type,
[object props],
[children ...]
)

이런 형식으로 구현한다. createClass 는 class 를 return 하는데 이건 element 를 리턴함...

string 은 div 같은 html 태그명이 온다.. / ReactClass type 은 사용자가 정의한 reactjs component...

```javascript
<Nav color="blue" />; // 이 jsx코드는 아래와 같이 변환된다..

React.createElement(Nav, { color: blue });
```

## Component 조합

아래의 예제중 Avatar instance 는 ProfilePic 과 ProfileLink instance 를 가지고있다.(소유하고있다)

React 에서 소유자는 다른 component 의 props 를 설정하는 component 다.

Avatar 는 div, ProfilePic, ProfileLink 를 소유하고있고 div 는 ProfilePic 과 ProfileLink 의 부모다

```javascript
var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfilePic username={this.props.username} />
        <ProfileLink username={this.props.username} />
      </div>
    );
  },
});

var ProfilePic = React.createClass({
  render: function() {
    return <img src={'https://graph.facebook.com/' + this.props.username + '/picture'} />;
  },
});

var ProfileLink = React.createClass({
  render: function() {
    return <a href={'https://www.facebook.com/' + this.props.username}>{this.props.username}</a>;
  },
});

ReactDOM.render(<Avatar username="pwh" />, document.getElementById('example'));
```

## Dynamic Children

자식 elements 를 여러번 반복할때 독자적으로 식별하기 위해 각 자식에 'key'를 할당함

```javascript
render: function() {
    var results = this.props.results;
    return (
      <ol>
        {results.map(function(result) {
          return <li key={result.id}>{result.text}</li>;
        })}
      </ol>
    );
  }
```

- React.children

React.Children 은 불투명한 자료구조(? children 이 노출되지 않아서???)인 this.props.children 을 다룰 수 있는 메소드를 제공함.

1.  React.Children.map(object children, function fn [, object thisArg])

javascript 의 map 과 마찬가지로 새로운 배열을 리턴한다. children 바로 밑에 있는 모든 자식들에 대해 fn 을 호출

2.  React.Children.forEach(object children, funciton fn [, object thisArg])

map 과 같지만 새로 return nothing...

3.  React.Children.count(object children)

children 에 들어있는 component 의 총 갯수를 리턴함. return number...

4.  React.Children.only(object children)

children 에 단 하나의 자식이 있을때 그 object 를 리턴함. 아닌경우 예외발생 return object...

5.  React.Children.toArray(object children)

children 을 개별 자식마다 키를 할당해 평면배열로 리턴함...(모르겠음)

## ReactDOM

- ReactDOM.render()

ReactComponent render(
ReactElement element,
DOMElement container,
[function callback]
)

- ReactDOM.findeDOMNode()

component 가 DOM 에 mount 된 경우 해당하는 DOM element 를 리턴함.

DOM 의 크기/위치 등 DOM 에서 정보를 읽을때 유용함.

## Reusable component

- prop 전달하기 (es6 spread 문법 사용)

```javascript
var CheckLink = React.createClass({
  render: function() {
    // 모든 prop을 받아서 CheckLink에 넘기고 <a>에 복사.
    // this.props는 Object {href: "/checked.html", children: "Click here!"}
    return <a {...this.props}> √ {this.props.children}</a>;
  },
});

ReactDOM.render(
  <CheckLink href="/checked.html">Click here!</CheckLink>,
  document.getElementById('example')
);
```

## ES6 문법으로 component 만들기

```javascript
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialCount };
  }
  tick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      // autobinding안되서 this.tick.bind(this) 해야하는데 화살표함수써서함
      <div onClick={() => this.tick()}>Clicks: {this.state.count}</div>
    );
  }
}
Counter.propTypes = { initialCount: React.PropTypes.number };
Counter.defaultProps = { initialCount: 0 };

ReactDOM.render(<Counter />, document.getElementById('container'));
```

## stateless functions

내부상태 X(?) / lifecycle method X

```javascript
function HelloMessage(props) {
  return <div>Hello {props.name}</div>;
}
ReactDOM.render(<HelloMessage name="Sebastian" />, mountNode);

// ES6 문법으로...
const HelloMessage = props => <div>Hello {props.name}</div>;
ReactDOM.render(<HelloMessage name="Sebastian" />, mountNode);
```

## ref

DOM 요소에 이름을 달아준다.

ref 는 DOM 요소에도 사용하고 component 에도 사용할 수 있으며, 해당 component 가 가지고있는 메소드 및 변수를 사용할 수 있다.

ref 를 아무데서나 사용하는건 지양해라. state 와 props 로 해결할 수 있는 곳에선 ref 를 사용하지 말고, 해결할 수 없는 곳에서만 사용하는것이 유지보수에 좋다.

ref 는 아래와 같은 경우에 유용하게 쓸 수 있다.

1.  component 에 의해 render 된 DOM 에 어떠한 처리를 할 경우...

2.  다른 프레임워크와 혼용...

```javascript
class Hello extends React.Component {
    handleClick() {
      this.input.value = "";
      this.input.focus();
    }
    render() {
      return (
        <div>
          <input ref={ref => this.input = ref}/> // <input> element를 this.input에 넣는다...
          <button onClick={this.handleClick.bind(this)}>Click Me</button>
        </div>
      )
    }
}

ReactDOM.render(<Hello/>, document.getElementById('app'));
```

## LifeCycle 다른 예제

```javascript
var SearchBox = React.createClass({
  searchChange: function(e) {
    e.preventDefault();
    this.props.searchHandler(this.refs.search_box.value);
  },
  // onChange가 발생할때 마다 searchChange method가 실행된다. 해당 method는 SearchBox의 props인 searchHandler를 실행하는데
  // parameter값으로 search_box라고 정의해놓은 SearchBox refs의 value.. 즉 input tag안의 입력값을 전달한다
  render: function() {
    return (
      <div className="search-form" style={{ textAlign: 'center' }}>
        <input
          onChange={this.searchChange}
          type="text"
          ref="search_box"
          placeholder="Input your search text..."
        />
      </div>
    );
  },
});

var DataList = React.createClass({
  getInitialState: function() {
    console.log('getInitialState in DataList');
    return {
      data: this.props.data,
    };
  },

  componentWillMount: function() {
    console.log('componentWillMount in DataList');
  },

  componentWillUpdate: function() {
    console.log('componentWillUpdate in DataList');
  },

  componentWillUnmount: function() {
    console.log('componentWillUnmount');
  },

  componentWillReceiveProps: function(nextProps) {
    console.log('componentWillReceiveProps in DataList');
    this.setState({
      data: nextProps.data,
    });
  },

  componentDidMount: function() {
    console.log('componentDidMount in DataList');
  },

  componentDidUpdate: function() {
    console.log('componentDidUpdate in DataList');
  },

  shouldComponentUpdate: function() {
    console.log('shouldComponentUpdate in DataList');
    return true;
  },

  render: function() {
    var data_template = this.state.data.map(function(d) {
      return (
        <div
          className="item"
          style={{
            overflow: 'auto',
            margin: '20px auto',
            border: '1px solid black',
            padding: '5px',
          }}
          key={d.id}>
          <div
            className="data-header"
            style={{ marginBottom: '5px', borderBottom: '1px solid #e7e7e7' }}>
            <span className="data-idx" style={{ color: '#333', marginRight: '20px' }}>
              {d.id}
            </span>
            <span className="data-title" style={{ fontWeight: 'bold' }}>
              {d.title}
            </span>
            <span className="data-author" style={{ float: 'right' }}>
              {d.author}
            </span>
          </div>
          <div className="data-content">{d.text}</div>
        </div>
      );
    });

    return <div className="item-wrapper">{data_template}</div>;
  },
});

var SampleWrapper = React.createClass({
  getInitialState: function() {
    return {
      data: this.props.data,
    };
  },

  _searchHandler: function(text) {
    // text: [SearchBox에서...] this.refs.search_box.value
    var nextDataList = this.props.data.filter(function(d) {
      return d.text.indexOf(text) >= 0;
    });

    this.setState({
      data: nextDataList,
    });
  },

  render: function() {
    return (
      <div style={{ margin: '0 200px' }}>
        <SearchBox searchHandler={this._searchHandler} />
        <DataList data={this.state.data} />
      </div>
    );
  },
});

ReactDOM.render(<SampleWrapper data={testData} />, document.getElementById('content'));
```
