import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import {toggleCancelOrder} from '../actions';
import {Goods} from '../components/cart';
import {PopupCancel} from '../components';

class Order extends React.Component {

  render() {
    const minHeight = {
      minHeight: this.props.innerHeight - 60
    };

    const goodsImg = 'shop-full1.jpg';

    return (
      <div className="container container-main" style={minHeight}>
        <div className="row">
          <div className="col-sm-12">
            <Goods
              isOrder={true}
              innerWidth={this.props.innerWidth}
              toggleCancelOrder={this.props.toggleCancelOrder}
              src={goodsImg}/>
            <Goods
              isOrder={true}
              innerWidth={this.props.innerWidth}
              toggleCancelOrder={this.props.toggleCancelOrder}
              src={goodsImg}/>
          </div>
        </div>
        {
          this.props.cancelOrder ?
          <PopupCancel toggleCancelOrder={this.props.toggleCancelOrder}/> :
          null
        }
        <div className={
          classNames('overlay', {active: this.props.cancelOrder})
        }></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    innerHeight: state.ui.display.innerHeight,
    innerWidth: state.ui.display.innerWidth,
    cancelOrder: state.ui.cancelOrder
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleCancelOrder: uiStatus => dispatch(toggleCancelOrder(uiStatus))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
