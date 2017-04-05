import React from 'react';
import {connect} from 'react-redux';

import {Banner, CardView, Search, Filter} from '../components';
import {Dialog} from '../components/shop';

class Shop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isActive: false};

    this.handleDialog = this.handleDialog.bind(this);
  }

  handleDialog() {
    this.setState({isActive: true});
    setTimeout(() => {
      this.setState({isActive: false});
    }, 3000);
  }

  render() {
    const minHeight = {
      minHeight: this.props.innerHeight - 60
    };

    const bannerSrc = [
      'shop.jpg',
      'shop1.jpg',
      'shop2.jpg'
    ];

    const cardSrc = 'shop-small.jpg';

    return (
      <div className="container-main" style={minHeight}>
        <Banner
          innerWidth={this.props.innerWidth}
          src={bannerSrc}/>
        <div className="container content-wrapper">
          <Filter/>
          <Search/>
          <CardView
            innerWidth={this.props.innerWidth}
            src={cardSrc}
            isShop={true}
            handleDialog={this.handleDialog}/>
          <Dialog isActive={this.state.isActive}/>
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

export default connect(mapStateToProps)(Shop);
