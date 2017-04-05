import React from 'react';

class Departure extends React.Component {

  render() {
    return (
      <div className="col-sm-5 card-departure">
        <div className="card">
          <div className="card-header">
            <h4>Departure</h4>
            <hr></hr>
          </div>
          <div className="card-body">
            <p>Incheon International Airport</p>
            <p>Country Code <span>KR</span></p>
            <p>IATA Code <span>ICN</span></p>
            <p className="inline-time">
              Departure Time
              <span className="inline-time">
                &nbsp;Feb 13, 2017 12:33:59PM
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Departure;
