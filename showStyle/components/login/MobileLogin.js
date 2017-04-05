import React from 'react';
import classNames from 'classnames';
import LanguageModal from './LanguageModal';

class MobileLogin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      seatNo: '',
      name: '',
      openModal: false
    };

    this.setSeatNo = this.setSeatNo.bind(this);
    this.setName = this.setName.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  setSeatNo(e) {
    this.setState({seatNo: e.target.value});
  }

  setName(e) {
    this.setState({name: e.target.value});
  }

  handleModal(e) {
    // e.preventDefault();
    this.setState({openModal: !this.state.openModal});
  }

  render() {
    const {login, locale} = this.props;
    const bg = {
      width: '100%',
      height: window.innerHeight,
      backgroundImage: `url(/img/bg_m_login.jpg)`,
      backgroundPosition: '50% 50%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    };

    return (
      <div className="mobile-auth-wrapper" style={bg}>
        <div className="login-form">
          <h1>{locale.title.msg}</h1>
          <label className="login-label">{locale.seatNo.msg}</label>
          <input
            type="text"
            className="login-input"
            onChange={this.setSeatNo}/>
          <label className="login-label">{locale.name.msg}</label>
          <input
            type="text"
            className="login-input"
            onChange={this.setName}/>
          <a href="#"
            className="btn-login"
            onClick={() => login(this.state.seatNo, this.state.name)}
          >
            {locale.login.msg}
          </a>
          <a href="#" className="btn-modal" onClick={this.handleModal}>
            {locale.selectLanguage.msg}
          </a>
        </div>
        {
          this.state.openModal ?
          <LanguageModal
            handleModal={this.handleModal}
            language={this.props.language}
            setLanguage={this.props.setLanguage}
          /> : null
        }
        <div
          className={classNames('overlay', {active: this.state.openModal})}
          onClick={this.handleModal}></div>
      </div>
    );
  }
}

export default MobileLogin;
