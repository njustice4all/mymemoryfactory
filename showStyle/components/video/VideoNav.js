import React from 'react';

class VideoNav extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="card-play play-nav">
            <div className="video-next">
              <h4>Next: </h4>
            </div>
            <div className="video-prev">
              <h4>Prev: </h4>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoNav;
