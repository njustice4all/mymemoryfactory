import React from 'react';
import {connect} from 'react-redux';

import {VideoInfo} from '../components/video';
import {Banner, CardView, SubTitle} from '../components';

class VideoDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {hasEpisodes: true, isEpisode: true};
  }

  render() {
    const bannerSrc = [
      'video.jpg',
      'video1.jpg',
      'video2.jpg'
    ];

    const cardSrc = 'video-small.jpg';

    return (
      <div className="container-main">
        <Banner
          innerWidth={this.props.innerWidth}
          src={bannerSrc}/>
        <div className="container content-wrapper">
          <VideoInfo/>
          {
            this.state.hasEpisodes ?
            <div className="episodes">
              <SubTitle subTitle={'Episode'}/>
              <CardView
                innerWidth={this.props.innerWidth}
                isEpisode={this.state.isEpisode}
                src={cardSrc}
                />
            </div> :
            null
          }
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

export default connect(mapStateToProps)(VideoDetail);
