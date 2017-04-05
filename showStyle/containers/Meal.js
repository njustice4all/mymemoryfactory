import React from 'react';
import {connect} from 'react-redux';

import {CardMeal} from '../components/meal';
import {fetchMeals} from '../actions';

class Meal extends React.Component {

  componentDidMount() {
    this.fetchMeals();
  }

  fetchMeals = async () => {
    await this.props.fetchMeals();
  }

  render() {
    const {innerWidth, innerHeight, meals} = this.props;

    const minHeight = {
      minHeight: innerHeight - 60
    };

    return (
      <div className="container container-main" style={minHeight}>
        <div className="row">
          {
            meals.map((v, i) =>
            <CardMeal
              key={v.id}
              meals={v}
              innerWidth={innerWidth} />)
            }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    innerHeight: state.ui.display.innerHeight,
    innerWidth: state.ui.display.innerWidth,
    meals: state.meals.lists
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMeals: () => dispatch(fetchMeals())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Meal);
