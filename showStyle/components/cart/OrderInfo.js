import React from 'react';

class OrderInfo extends React.Component {

  render() {
    const {info} = this.props;

    return (
      <div className="order-info">
        <label>Seat Number</label>
        <div className="order-info-span">
          <span>{info.seatNo}</span>
        </div>
        <label>Name</label>
        <div className="order-info-span">
          <span>{info.name}</span>
        </div>
      </div>
    );
  }
}

export default OrderInfo;
