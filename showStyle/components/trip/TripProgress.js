import React from 'react';
import TimeAgo from 'react-timeago';

class TripProgress extends React.Component {

  render() {
    const styleWidth = {
      width: '50%'
    };
    const styleIconFlight = {
      left: '50%'
    };

    return (
      <div className="col-sm-12 card-progress">
        <div className="card progress-wrapper">
          <div className="dot" id="dot-left">
            <img src="img/dot.png" alt="" />
            <p className="text-bold">ICN</p>
          </div>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              style={styleWidth}>
            </div>
            <div className="icon-flight" style={styleIconFlight}>
              <img src="img/icon-flight.png" alt="" />
            </div>
          </div>
          <div className="dot" id="dot-right">
            <img src="img/dot.png" alt="" />
            <p className="text-bold">GMP</p>
          </div>
          <p className="text-bold">
            Arrives after&nbsp;
            <TimeAgo date="Mar 20, 2017"/>
          </p>
        </div>
      </div>
    );
  }
}

export default TripProgress;
