import React from 'react';

class PopupCall extends React.Component {

  constructor(props) {
    super(props);
    this.closePopup = this.closePopup.bind(this);
    this.handleCall = this.handleCall.bind(this);
  }

  closePopup(e) {
    e.preventDefault();
    this.props.toggleOverlay(false);
    this.props.toggleCall(false);
  }

  handleCall(e) {
    e.preventDefault();
    const {passengerInfo, setCrewCall, cancelCrewCall} = this.props;

    if (passengerInfo.isCall) {
      cancelCrewCall();
    } else {
      setCrewCall();
    }
  }

  render() {
    const {passengerInfo} = this.props;

    let styleCallStatus;

    if (passengerInfo.isCall) {
      styleCallStatus = {backgroundColor: '#634aaf'};
    } else {
      styleCallStatus = {backgroundColor: '#0ca678'};
    }

    return (
      <div className="popup-call">
        <div className="popup-call-content">
          <h3>Crew Call</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer nec odio.
            {passengerInfo.seatNo}
            {passengerInfo.name}
          </p>
        </div>
        <div className="popup-call-bottom">
          <a
            href="#"
            className="popup-btn-call"
            onClick={this.closePopup}>Close</a>
          <a
            href="#"
            className="popup-btn-call"
            onClick={this.handleCall}
            style={styleCallStatus}>
              {passengerInfo.isCall ? 'Cancel' : 'Call'}
            </a>
        </div>
      </div>
    );
  }
}

export default PopupCall;
