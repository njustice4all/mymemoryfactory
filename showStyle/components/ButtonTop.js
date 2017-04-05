import React from 'react';
import classNames from 'classnames';

class ButtonTop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isActive: false};

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    // if (window.scrollY > 0) {
    //   this.setState({isActive: true});
    //   return;
    // }
    // this.setState({isActive: false});
    const top = typeof window.scrollY === 'undefined' ?
      window.pageYOffset :
      window.scrollY;
    this.setState({isActive: top !== 0});
  }

  scrollTop(e) {
    e.preventDefault();
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <a
        href="#"
        className={classNames('scroll-top', {active: this.state.isActive})}
        onClick={this.scrollTop}>
        <i className="fa fa-arrow-up" aria-hidden="true"></i>
      </a>
    );
  }
}

export default ButtonTop;
