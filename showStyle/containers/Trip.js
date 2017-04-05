import React from 'react';
import {connect} from 'react-redux';

import {TripProgress, Departure, Arrival} from '../components/trip';

class Trip extends React.Component {

  render() {
    const minHeight = {
      minHeight: this.props.innerHeight - 60
    };

    return (
      <div className="container container-main" style={minHeight}>
        <div className="row">
          <TripProgress/>
        </div>
        <div className="row">
          <Departure/>
          <Arrival/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    innerHeight: state.ui.display.innerHeight
  };
};

export default connect(mapStateToProps)(Trip);
