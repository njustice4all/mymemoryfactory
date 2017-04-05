import React from 'react';
import {connect} from 'react-redux';
import {
  toggleSidebar,
  toggleOverlay,
  toggleCall,
  innerDisplay,
  setCrewCall,
  cancelCrewCall,
  toggleChangeSeat
} from '../actions';

import {Header} from '../components/menu';
import {PopupCall, ButtonTop, ChangeSeat} from '../components';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize() {
    this.props.innerDisplay(window.innerWidth, window.innerHeight);
  }

  render() {
    const pathname = this.props.location.pathname;

    return (
      <div className="App">
        {
          pathname === '/login' ?
          null :
          <Header
            sidebar={this.props.sidebar}
            overlay={this.props.overlay}
            toggleSidebar={this.props.toggleSidebar}
            toggleOverlay={this.props.toggleOverlay}
            toggleCall={this.props.toggleCall}
            toggleChangeSeat={this.props.toggleChangeSeat}/>
        }
        {
          this.props.callCrew ?
          <PopupCall
            toggleOverlay={this.props.toggleOverlay}
            toggleCall={this.props.toggleCall}
            passengerInfo={this.props.passengerInfo}
            setCrewCall={this.props.setCrewCall}
            cancelCrewCall={this.props.cancelCrewCall}/> : null
        }
        {
          this.props.changeSeat ?
          <ChangeSeat
            toggleOverlay={this.props.toggleOverlay}
            toggleChangeSeat={this.props.toggleChangeSeat}/> : null
        }
        <ButtonTop/>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sidebar: state.ui.sidebar,
    overlay: state.ui.overlay,
    passengerInfo: state.passengerInfo,
    callCrew: state.ui.callCrew,
    changeSeat: state.ui.changeSeat
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleSidebar: uiStatus => dispatch(toggleSidebar(uiStatus)),
    toggleOverlay: uiStatus => dispatch(toggleOverlay(uiStatus)),
    toggleCall: uiStatus => dispatch(toggleCall(uiStatus)),
    innerDisplay: (innerWidth, innerHeight) => {
      dispatch(innerDisplay(innerWidth, innerHeight));
    },
    setCrewCall: () => dispatch(setCrewCall()),
    cancelCrewCall: () => dispatch(cancelCrewCall()),
    toggleChangeSeat: uiStatus => dispatch(toggleChangeSeat(uiStatus))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
