import React from 'react';
import {connect} from 'react-redux';

import {Banner, ImageFull} from '../components';
import {Product} from '../components/shop';

class ShopProduct extends React.Component {

  render() {
    const minHeight = {
      minHeight: this.props.innerHeight - 60
    };

    const bannerSrc = [
      'shop.jpg'
    ];

    const images = [
      'shop-full1.jpg',
      'shop-full2.jpg',
      'shop-full3.jpg'
    ];

    return (
      <div className="container-main" style={minHeight}>
        <Banner
          innerWidth={this.props.innerWidth}
          src={bannerSrc}/>
        <div className="container content-wrapper">
          <Product/>
          <ImageFull images={images}/>
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

export default connect(mapStateToProps)(ShopProduct);
