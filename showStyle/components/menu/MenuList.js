import React from 'react';
import {Link} from 'react-router';

class MenuList extends React.Component {

  constructor(props) {
    super(props);
    this.callCrew = this.callCrew.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.changeSeat = this.changeSeat.bind(this);
  }

  callCrew() {
    const {closeSideMenu, toggleCall} = this.props;
    closeSideMenu();
    toggleCall(true);
  }

  changeSeat() {
    const {closeSideMenu, toggleChangeSeat} = this.props;
    closeSideMenu();
    toggleChangeSeat(true);
  }

  handleClose() {
    const {closeSideMenu, closeOverlay} = this.props;
    closeSideMenu();
    closeOverlay();
  }

  render() {
    return (
      <div className="list-wrapper">
        <ul className="lists">
          <li>
            <span className="list-parent">
              <img src="img/icon-video.png" alt="" />
              Movies & TV Shows
            </span>
            <ul className="list-child split">
              <li>Movies</li>
              <li>TV Shows</li>
            </ul>
          </li>
          <li className="split">
            <span className="list-parent">
              <img src="img/icon-flight.png" alt="" />
              Trip Information
            </span>
          </li>
          <li>
            <span className="list-parent">
              <img src="img/icon-shop.png" alt="" />
              Sky Shop
            </span>
            <ul className="list-child split">
              <li>
                <Link to="/cart" onClick={this.handleClose}>Cart</Link>
              </li>
              <li>Orders</li>
            </ul>
          </li>
          <li>
            <span className="list-parent">
              <img src="img/icon-meal.png" alt="" />
              Meal
            </span>
            <ul className="list-child split">
              <li>Cart</li>
              <li>Orders</li>
            </ul>
          </li>
          <li className="split">
            <Link to="/order" onClick={this.handleClose}>Order</Link>
          </li>
          <li
            className="split"
            onClick={this.changeSeat}>Change Seat & Name</li>
          <li onClick={this.callCrew}>Cabin Crew Call</li>
        </ul>
      </div>
    );
  }
}

export default MenuList;
