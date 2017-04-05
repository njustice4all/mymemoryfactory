import React from 'react';
import {connect} from 'react-redux';

import {Banner, Filter, CardView, Search} from '../components';

class Video extends React.Component {

  constructor(props) {
    super(props);
    this.state = {bannerShow: true};
  }

  render() {
    const minHeight = {
      minHeight: this.props.innerHeight - 60
    };

    const bannerSrc = [
      'video.jpg',
      'video1.jpg',
      'video2.jpg'
    ];

    const cardSrc = 'video-small.jpg';

    return (
      <div className="container-main" style={minHeight}>
        {
          this.state.bannerShow ?
          <Banner
            innerWidth={this.props.innerWidth}
            src={bannerSrc}/> : null
        }
        <div className="container content-wrapper">
          <Filter/>
          <Search/>
          <CardView
            innerWidth={this.props.innerWidth}
            src={cardSrc}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    innerHeight: state.ui.display.innerHeight,
    innerWidth: state.ui.display.innerWidth
  };
};

export default connect(mapStateToProps)(Video);
