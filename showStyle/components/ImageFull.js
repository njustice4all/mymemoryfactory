import React from 'react';
import {URL} from '../commonConstant';

class ImageFull extends React.Component {

  render() {
    const {images} = this.props;
    const fullWidth = {width: '100%'};

    return (
      <div className="row">
        <div className="col-xs-12">
          {
            images ? images.map(v =>
              <img
                src={`${URL + v.url}`}
                key={v.id}
                style={fullWidth}
                alt="images"
              />
            ) : null
          }
        </div>
      </div>
    );
  }
}

export default ImageFull;
