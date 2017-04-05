import React from 'react';
import {Link} from 'react-router';
// import classNames from 'classnames';
import {URL} from '../../commonConstant';

class CardMeal extends React.Component {

  handleSelect(e) {
    e.preventDefault();
    if (e.target.innerHTML === 'Selected') {
      e.target.className = 'btn-meal-select';
      e.target.innerHTML = 'Select';
      return;
    }

    const btnArr = document.getElementsByClassName('btn-meal-select');

    for (let i = 0; i < btnArr.length; i++) {
      btnArr[i].className = 'btn-meal-select';
      btnArr[i].innerHTML = 'Select';
    }

    e.target.className = 'btn-meal-select selected';
    e.target.innerHTML = 'Selected';
  }

  render() {
    const {innerWidth, meals} = this.props;
    const img = {
      width: '100%',
      height: innerWidth - (innerWidth / 3),
      maxHeight: '350px',
      backgroundImage: `url(${URL + meals.detailImages[0].url})`,
      backgroundPosition: '50% 50%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    };

    return (
      <div className="col-sm-6">
        <div className="card-wrapper">
          <div className="card-top">
            <Link to={`/meal/detail/${meals.id}`}>
              <div style={img}></div>
              <div className="card-overlay"></div>
            </Link>
          </div>
          <div className="card-content-wrapper">
            <div className="card-bottom">
              <h3 className="sb-tiny">{meals.titles}</h3>
              <p className="card-p sb-tiny">
                {meals.shortDescriptions}
              </p>
              <div
                onClick={this.handleSelect}
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

export default CardMeal;
