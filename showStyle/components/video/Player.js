import React from 'react';
import videojs from 'video.js';

class Player extends React.Component {

  componentDidMount() {
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    const innerWidth = this.props.innerWidth;
    const playerHeight = {
      width: '100%',
      height: innerWidth - (innerWidth / 4),
      maxHeight: '350px'
    };

    return (
      <div data-vjs-player>
        <video
          ref={node => {
            this.videoNode = node;
          }}
          className="video-js"
          style={playerHeight}></video>
      </div>
    );
  }
}

export default Player;
