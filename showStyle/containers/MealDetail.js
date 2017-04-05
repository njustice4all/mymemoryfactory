import React from 'react';
import {connect} from 'react-redux';

import {Banner, ImageFull} from '../components';
import {MealInfo} from '../components/meal';
import {fetchMealById} from '../actions';
import {OUT_OF_STOCK, IN_STOCK} from '../commonConstant';

class MealDetail extends React.Component {

  componentDidMount() {
    const {params} = this.props;

    this.fetchMealById(params.id);
  }

  fetchMealById = async (id) => {
    await this.props.fetchMealById(id);
  }

  renderStatus = status => {
    switch (status) {
      case OUT_OF_STOCK:
        return 'OUT OF STOCK';
      case IN_STOCK:
        return 'IN STOCK';
      default:
        return null;
    }
  }

  render() {
    const {innerHeight, innerWidth, meal} = this.props;

    const minHeight = {minHeight: innerHeight - 60};

    const bannerSrc = [
      'meal1.jpg',
      'meal2.jpg'
    ];

    return (
      <div className="container-main" style={minHeight}>
        <Banner
          innerWidth={innerWidth}
          src={bannerSrc} />
        <div className="container content-wrapper">
          <MealInfo
            meal={meal}
            renderStatus={this.renderStatus} />
          <ImageFull
            images={meal.detailImages} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    innerHeight: state.ui.display.innerHeight,
    innerWidth: state.ui.display.innerWidth,
    meal: state.meals.one
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMealById: (id) => dispatch(fetchMealById(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MealDetail);
