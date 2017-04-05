import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router';

class Dialog extends React.Component {

  render() {
    return (
      <div className={classNames('cart-dialog', {active: this.props.isActive})}>
        <p className="card-p">상품이 장바구니에 담겼습니다.</p>
        <Link to="/cart">Go Cart</Link>
      </div>
    );
  }
}

export default Dialog;
