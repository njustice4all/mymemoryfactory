import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

class Product extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      paymentMethod: 1,
      currency: 1,
      quantity: 1
    };

    this.setPaymentMethod = this.setPaymentMethod.bind(this);
    this.setQuantity = this.setQuantity.bind(this);
    this.setCurrency = this.setCurrency.bind(this);
  }

  setPaymentMethod(event, index, value) {
    this.setState({paymentMethod: value});
  }

  setQuantity(event, index, value) {
    this.setState({quantity: value});
  }

  setCurrency(event, index, value) {
    this.setState({currency: value});
  }

  render() {
    const width = {width: '100%'};

    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="card-info-wrapper product-info clearfix">
            <div className="stock-status">IN STOCK</div>
            <div className="card-info sb-tiny col-sm-12 col-xs-12">
              <p className="product-span product-title">
                Title
              </p>
            </div>
            <div className="btn-card col-sm-7 col-xs-12">
              <SelectField
                floatingLabelText="Currency"
                value={this.state.currency}
                onChange={this.setCurrency}
                autoWidth={true}
                style={width}>
                <MenuItem value={1} primaryText="USD" />
                <MenuItem value={2} primaryText="KRW" />
              </SelectField>
              <SelectField
                floatingLabelText="Quantity"
                value={this.state.quantity}
                onChange={this.setQuantity}
                autoWidth={true}
                style={width}>
                <MenuItem value={1} primaryText="1" />
                <MenuItem value={2} primaryText="2" />
                <MenuItem value={3} primaryText="3" />
                <MenuItem value={4} primaryText="4" />
                <MenuItem value={5} primaryText="5" />
              </SelectField>
              <div className="payment-method">
                <SelectField
                  floatingLabelText="Payment Method"
                  value={this.state.paymentMethod}
                  onChange={this.setPaymentMethod}
                  autoWidth={true}
                  style={width}>
                  <MenuItem value={1} primaryText="Credit Card" />
                  <MenuItem value={2} primaryText="Cash" />
                </SelectField>
              </div>
            </div>
            <div className="btn-card col-sm-5 col-xs-12">
              <a href="#" id="btn-cart">Cart</a>
            </div>
            <div className="col-xs-12">
              <div className="product-p">
                <p className="card-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Integer nec odio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
