import React from 'react';
import {Link} from 'react-router';

class CardView extends React.Component {

  constructor(props) {
    super(props);

    this.handleLink = this.handleLink.bind(this);
  }

  handleLink() {
    const {isEpisode, isShop} = this.props;

    if (isEpisode) {
      return '/video/play';
    } else if (isShop) {
      return '/shop/product';
    }
    return '/video/detail';
  }

  render() {
    const {innerWidth, isEpisode, isShop, src, handleDialog} = this.props;

    const cardImg = {
      width: '100%',
      height: innerWidth - (innerWidth / 3),
      maxHeight: '350px',
      backgroundImage: `url(/img/${src})`,
      backgroundPosition: '50% 50%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    };

    const directPlay = (
      <div className="btn-direct-play">
        <i className="fa fa-play-circle-o" aria-hidden="true"></i>
      </div>
    );

    const cart = (
      <div className="price-wrapper clearfix">
        <span>$ 2,500</span>
        <span id="icon-cart" onClick={handleDialog}>
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </span>
      </div>
    );

    return (
      <div className="row">
        <div className="col-sm-6">
          <div className="card-wrapper">
            <div className="card-top">
              <Link to={this.handleLink}>
                <div style={cardImg}></div>
                <div className="card-overlay"></div>
                {isEpisode ? directPlay : null}
              </Link>
            </div>
            <div className="card-content-wrapper">
              <div className="card-bottom">
                <h3 className="sb-tiny">Title</h3>
                <p className="card-p sb-tiny">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Integer nec odio.
                </p>
                {isShop ? cart : null}
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card-wrapper">
            <div className="card-top">
              <Link to={this.handleLink}>
                <div style={cardImg}></div>
                <div className="card-overlay"></div>
                {isEpisode ? directPlay : null}
              </Link>
            </div>
            <div className="card-content-wrapper">
              <div className="card-bottom">
                <h3 className="sb-tiny">Title</h3>
                <p className="card-p sb-tiny">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Integer nec odio.
                </p>
                {isShop ? cart : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardView;
