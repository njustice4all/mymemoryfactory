import React from 'react';

class MealInfo extends React.Component {

  render() {
    const {meal, renderStatus} = this.props;

    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="card-info-wrapper product-info clearfix">
            <div className="stock-status">
              {renderStatus(meal.stockState)}
            </div>
            <div className="card-info sb-tiny col-sm-12 col-xs-12">
              <p className="product-span sb-tiny">{meal.titles}</p>
              <p>{meal.shortDescriptions}</p>
              <div
                className="btn-meal-select">
                Select
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MealInfo;
