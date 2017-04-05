import React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {setAuthCookie, setLanguage} from '../actions';

import {MobileLogin, FullLogin} from '../components/login';
import {getCurrentLocale, prepareMessages} from '../locale';

class Authentication extends React.Component {

  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.setCookie = this.setCookie.bind(this);
  }

  handleLogin(seatNo, name) {
    if ((seatNo || name) !== '') {
      this.setCookie(seatNo, name, 1);
      this.props.setAuthCookie(seatNo, name);
      browserHistory.push('/');
      return;
    }

    console.log('please login');
  }

  setCookie(seat, passengerName, expDate) {
    const now = new Date();
    now.setDate(now.getDate() + expDate);

    let seatNo = `seatNo=${seat}`;
    let name = `name=${passengerName}`;
    let isLogin = `isLogin=true`;

    if (typeof expDate !== 'undefined') {
      seatNo += `;expires=${now.toGMTString()};`;
      name += `;expires=${now.toGMTString()};`;
      isLogin += `;expires=${now.toGMTString()};`;
    }

    document.cookie = seatNo;
    document.cookie = name;
    document.cookie = isLogin;
  }

  render() {
    const {language} = this.props;

    return (
      <div className="login-container">
        {
          this.props.innerWidth < 768 ?
          <MobileLogin
            login={this.handleLogin}
            language={this.props.language}
            setLanguage={this.props.setLanguage}
            locale={prepareMessages(getCurrentLocale(language), 'Auth')}
          /> :
          <FullLogin login={this.handleLogin}/>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    innerWidth: state.ui.display.innerWidth,
    language: state.ui.language
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAuthCookie: (seatNo, name) => dispatch(setAuthCookie(seatNo, name)),
    setLanguage: language => dispatch(setLanguage(language))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
