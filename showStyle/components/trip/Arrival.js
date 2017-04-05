import React from 'react';

class Arrival extends React.Component {

  render() {
    return (
      <div className="col-sm-7 card-arrival">
        <div className="card">
          <div className="card-header">
            <h4>Arrival</h4>
            <hr></hr>
          </div>
          <div className="card-body">
            <div className="arrival-content">
              <p>Gimpo International Airport</p>
              <p>Country Code <span>KR</span></p>
              <p>IATA Code <span>GMP</span></p>
              <p className="inline-time">
                Estimated Time
                <span className="inline-time">
                  &nbsp;Feb 13, 2017 12:33:59 PM
                </span>
              </p>
            </div>
            <div className="arrival-content arrival-content-right">
              <p>Weather <span>Partly Cloudy</span></p>
              <p>Temperature <span>-2</span></p>
              <p>Precipitation <span>0%</span></p>
              <p>Humidity <span>60%</span></p>
              <p>Wind <span>1.0 m/s</span></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Arrival;
