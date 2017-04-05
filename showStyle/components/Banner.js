import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Banner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {index: 0, intervalId: 0, normal: true};

    this.interval = this.interval.bind(this);
    this.nextIndex = this.nextIndex.bind(this);
    this.prevIndex = this.prevIndex.bind(this);
    this.handleNextSlide = this.handleNextSlide.bind(this);
    this.handlePrevSlide = this.handlePrevSlide.bind(this);
  }

  componentDidMount() {
    this.interval();
  }

  interval() {
    let intervalId = setInterval(this.nextIndex, 8000);
    this.setState({intervalId: intervalId});
  }

  nextIndex() {
    let newIndex = this.state.index + 1;
    if (newIndex === this.props.src.length) {
      newIndex = 0;
    }

    this.setState({index: newIndex, normal: true});
  }

  prevIndex() {
    let newIndex = this.state.index - 1;
    if (newIndex < 0) {
      newIndex = this.props.src.length - 1;
    }

    this.setState({index: newIndex, normal: false});
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  handlePrevSlide() {
    clearInterval(this.state.intervalId);
    this.prevIndex();
    this.interval();
  }

  handleNextSlide() {
    clearInterval(this.state.intervalId);
    this.nextIndex();
    this.interval();
  }

  render() {
    const {src, innerWidth} = this.props;
    const bannerHeight = {
      height: innerWidth - (innerWidth / 4),
      maxHeight: '550px',
      position: 'relative',
      overflowX: 'hidden'
    };

    const bannerArr = [];
    for (let i = 0; i < src.length; i++) {
      bannerArr.push(
        <div
          className="banner"
          style={{backgroundImage: `url(/img/${src[i]})`}}
          key={i}></div>
      );
    }

    const index = this.state.index % bannerArr.length;
    const element = React.cloneElement(bannerArr[index]);

    return (
      <div style={bannerHeight}>
        <ReactCSSTransitionGroup
          transitionName={this.state.normal ? 'normal' : 'reverse'}
          transitionEnterTimeout={1500}
          transitionLeaveTimeout={1500}>
          {element}
        </ReactCSSTransitionGroup>
        <div className="arrow-wrapper">
          <div
            className="arrow arrow-left"
            onClick={this.handlePrevSlide}
          >
            <span
              className="glyphicon glyphicon-chevron-left"
              aria-hidden="true"></span>
          </div>
          <div
            className="arrow arrow-right"
            onClick={this.handleNextSlide}
          >
            <span
              className="glyphicon glyphicon-chevron-right"
              aria-hidden="true"></span>
          </div>
        </div>
        <div className="banner-overlay"></div>
      </div>
    );
  }
}

export default Banner;
