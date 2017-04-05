import React from 'react';
import {connect} from 'react-redux';

import {Goods, OrderInfo} from '../components/cart';
import {BtnOrderNow} from '../components';

class Cart extends React.Component {

  render() {
    const minHeight = {
      minHeight: this.props.innerHeight - 60
    };

    const goodsImg = 'shop-full1.jpg';

    return (
      <div className="container container-main" style={minHeight}>
        <div className="row">
          <div className="col-sm-7">
            <Goods
              innerWidth={this.props.innerWidth}
              src={goodsImg}/>
            <Goods
              innerWidth={this.props.innerWidth}
              src={goodsImg}/>
          </div>
          <div className="col-sm-5">
            <OrderInfo info={this.props.passengerInfo}/>
            <BtnOrderNow/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    innerHeight: state.ui.display.innerHeight,
    innerWidth: state.ui.display.innerWidth,
    passengerInfo: state.passengerInfo
  };
};

export default connect(mapStateToProps)(Cart);
