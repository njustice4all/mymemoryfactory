import React from 'react';
import {Link} from 'react-router';

class QuickMenu extends React.Component {

  render() {
    return (
      <div className="quick-menu">
        <div className="quick-icon">
          <Link to="/video">
            <img src="img/icon-video.png" alt="" />
          </Link>
        </div>
        <div className="quick-icon">
          <Link to="/trip">
            <img src="img/icon-flight.png" alt="" />
          </Link>
        </div>
        <div className="quick-icon">
          <Link to="/shop">
            <img src="img/icon-shop.png" alt="" />
          </Link>
        </div>
        <div className="quick-icon">
          <Link to="/meal">
            <img src="img/icon-meal.png" alt="" />
          </Link>
        </div>
      </div>
    );
  }
}

export default QuickMenu;
