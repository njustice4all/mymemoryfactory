import React from 'react';

class PopupCancel extends React.Component {

  render() {
    return (
      <div className="cancel-order">
        <div className="cancel-order-content">
          <h3>Cancel Order</h3>
          <p>
            Do you really want to cancel your order? Canceled orders
            can not be reverted.
          </p>
          <div className="btn-cancel-wrapper clearfix">
            <a
              href="#">YES</a>
            <a
              href="#"
              onClick={() => this.props.toggleCancelOrder(false)}>NO</a>
          </div>
        </div>
      </div>
    );
  }
}

export default PopupCancel;
