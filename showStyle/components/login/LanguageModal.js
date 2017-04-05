import React from 'react';
import {Flag} from 'semantic-ui-react';

class LanguageModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: this.props.language};

    this.handleChange = this.handleChange.bind(this);
    this.saveLanguage = this.saveLanguage.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  saveLanguage() {
    this.props.setLanguage(this.state.value);
    this.props.handleModal();
  }

  render() {
    const value = this.state.value;

    return (
      <div className="modal-container">
        <div className="panel-wrapper">
          <h4>언어</h4>
        </div>
        <div className="flag-wrapper">
          <label className="flag-label">
            <input
              type="radio"
              value="ko"
              checked={value === 'ko'}
              onChange={this.handleChange}
            />
            <Flag name="kr"/> South Korea
          </label>
          <label className="flag-label">
            <input
              type="radio"
              value="us"
              checked={value === 'us'}
              onChange={this.handleChange}
            />
            <Flag name="us"/> United States
          </label>
          <label className="flag-label">
            <input
              type="radio"
              value="cn"
              checked={value === 'cn'}
              onChange={this.handleChange}
            />
            <Flag name="cn"/> China
          </label>
          <label className="flag-label">
            <input
              type="radio"
              value="jp"
              checked={value === 'jp'}
              onChange={this.handleChange}
            />
            <Flag name="jp"/> Japan
          </label>
        </div>
        <a
          href="#"
          className="btn-option btn-save"
          onClick={this.saveLanguage}>저장</a>
        <a
          href="#"
          className="btn-option btn-cancel"
          onClick={this.props.handleModal}>닫기</a>
      </div>
    );
  }
}

export default LanguageModal;
