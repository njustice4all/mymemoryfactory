import React from 'react';
import {connect} from 'react-redux';
import {setAuthCookie} from '../actions';
import {getSeatNo, getName} from '../utils';

import {QuickMenu} from '../components';

class Main extends React.Component {

  componentDidMount() {
    if (!this.props.isLogin) {
      this.props.setAuthCookie(getSeatNo(), getName());
    }
  }

  render() {
    const bg = {
      width: '100%',
      height: this.props.innerHeight - 60,
      backgroundImage: `url(/img/bg_m_login.jpg)`,
      backgroundPosition: '50% 50%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative'
    };

    return (
      <div className="container-main" style={bg}>
        <QuickMenu/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.passengerInfo.isLogin,
    innerHeight: state.ui.display.innerHeight
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAuthCookie: (seatNo, name) => dispatch(setAuthCookie(seatNo, name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
