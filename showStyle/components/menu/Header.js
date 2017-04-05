import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router';
import MenuList from './MenuList';

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.handleMenu = this.handleMenu.bind(this);
    this.closeSideMenu = this.closeSideMenu.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
  }

  handleMenu() {
    const {
      sidebar,
      overlay,
      toggleSidebar,
      toggleOverlay,
      toggleCall,
      toggleChangeSeat
    } = this.props;

    // 승무원 호출시 ui 상태 or 좌석변경 ui 상태
    if (sidebar === false && overlay === true) {
      toggleOverlay(false);
      toggleCall(false);
      toggleChangeSeat(false);
      return;
    }

    toggleSidebar(!sidebar);
    toggleOverlay(!overlay);
  }

  closeSideMenu() {
    this.props.toggleSidebar(false);
  }

  closeOverlay() {
    this.props.toggleOverlay(false);
  }

  render() {
    const {sidebar, overlay, toggleCall, toggleChangeSeat} = this.props;

    return (
      <div className="menus">
        <header className="regular-header">
          <div className="btn-menu" onClick={this.handleMenu}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
          <div className="center-logo">
            <Link to="/">
              <img src="img/logo.png" alt="" />
            </Link>
          </div>
        </header>
        <div className={classNames('side-menu', {active: sidebar})}>
          <MenuList
            handleMenu={this.handleMenu}
            closeSideMenu={this.closeSideMenu}
            closeOverlay={this.closeOverlay}
            toggleCall={toggleCall}
            toggleChangeSeat={toggleChangeSeat}/>
        </div>
        <div
          className={classNames('overlay', {active: overlay})}
          onClick={this.handleMenu}></div>
      </div>
    );
  }
}

export default Header;
