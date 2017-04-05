import React from 'react';
import {connect} from 'react-redux';

import {Player, NowPlayInfo, VideoNav} from '../components/video';

class VideoPlay extends React.Component {

  render() {
    const videoJsOptions = {
      autoplay: false,
      controls: true,
      sources: [
        {
          src: '/img/test.mp4',
          type: 'video/mp4'
        }
      ],
      innerWidth: this.props.innerWidth
    };

    return (
      <div className="container-main">
        <Player {...videoJsOptions}/>
        <div className="container content-wrapper">
          <NowPlayInfo/>
          <VideoNav/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    innerWidth: state.ui.display.innerWidth
  };
};

export default connect(mapStateToProps)(VideoPlay);
