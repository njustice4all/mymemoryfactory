import React from 'react';

class VideoInfo extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="card-info-wrapper clearfix">
            <div className="card-info col-sm-7 col-xs-12">
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer nec odio.
              </p>
            </div>
            <div className="btn-card col-sm-5 col-xs-12">
              <a href="#" id="btn-play">
                Play<i className="fa fa-play" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoInfo;
