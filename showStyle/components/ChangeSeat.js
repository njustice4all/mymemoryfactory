import React from 'react';
import {browserHistory} from 'react-router';

import {clearCookie} from '../utils';

class ChangeSeat extends React.Component {

  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClose(e) {
    e.preventDefault();
    const {toggleOverlay, toggleChangeSeat} = this.props;

    toggleOverlay(false);
    toggleChangeSeat(false);
  }

  handleChange(e) {
    e.preventDefault();
    const {toggleOverlay, toggleChangeSeat} = this.props;

    toggleOverlay(false);
    toggleChangeSeat(false);
    clearCookie();
    browserHistory.push('/login');
  }

  render() {
    return (
      <div className="cancel-order">
        <div className="cancel-order-content">
          <h3>Change Seat & Name</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer nec odio.
          </p>
          <div className="btn-cancel-wrapper clearfix">
            <a href="#" onClick={this.handleChange}>YES</a>
            <a href="#" onClick={this.handleClose}>NO</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangeSeat;
