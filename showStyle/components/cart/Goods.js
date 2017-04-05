import React from 'react';
import classNames from 'classnames';

class Goods extends React.Component {

  constructor(props) {
    super(props);
    this.state = {quantity: 1};

    this.setQuantity = this.setQuantity.bind(this);
    this.orderStatus = this.orderStatus.bind(this);
  }

  setQuantity(e) {
    this.setState({quantity: e.target.value});
  }

  orderStatus() {
    this.props.toggleCancelOrder(true);
  }

  render() {
    const {isOrder, innerWidth, src} = this.props;

    const goodsImg = {
      width: '100%',
      height: innerWidth - (innerWidth / 3),
      maxHeight: '350px',
      backgroundImage: `url(/img/${src})`,
      backgroundPosition: '50% 50%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    };

    const orderStatus = (
      <p className="card-p clearfix">
        <span
          onClick={this.orderStatus}
          className="goods-span-right order-status">Requested</span>
      </p>
    );

    const quantity = (
      <select defaultValue="1">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    );

    return (
      <div className="card-wrapper">
        <div className="card-top">
          <div className="btn-cart-cancel">
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
          <div style={goodsImg}></div>
          <div className="card-overlay"></div>
        </div>
        <div className="card-content-wrapper">
          <div className="card-bottom">
            <h3 className="sb-tiny">Title</h3>
            <p className="card-p sb-tiny">
              <span className="goods-span-left">Payment Method</span>
              <span className="goods-span-right">Credit Card</span>
            </p>
            <p className="card-p sb-tiny">
              <span className="goods-span-left">Price</span>
              <span className="goods-span-right">2,500 USD</span>
            </p>
            <p className={classNames('card-p', {'sb-tiny': isOrder})}>
              <span className="goods-span-left">Quantity</span>
              <span className="goods-span-right span-quantity">
                {isOrder ? 1 : quantity}
              </span>
            </p>
            {isOrder ? orderStatus : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Goods;
