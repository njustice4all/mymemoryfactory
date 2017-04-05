import assign from 'lodash/assign';
import * as actionTypes from '../actions/actionTypes';

const initMeals = {
  lists: [],
  one: {},
  status: {
    isFetching: false,
    errorMessage: null
  },
};

export const meals = (state = initMeals, action) => {
  switch (action.type) {
    case actionTypes.GET_MEALS:
    case actionTypes.GET_MEAL_BY_ID:
      return assign({}, state, {status: {isFetching: true}});
    case actionTypes.GET_MEALS_SUCCESS:
      return assign({}, state, {
        lists: action.meals,
        status: {
          isFetching: false
        }
      });
    case actionTypes.GET_MEALS_FAILURE:
      return assign({}, state, {
        status: {
          isFetching: false,
          errorMessage: action.err
        }
      })
    case actionTypes.GET_MEAL_BY_ID_SUCCESS:
      return assign({}, state, {
        one: action.meal,
        status: {
          isFetching: false
        }
      });
    case actionTypes.GET_MEAL_BY_ID_FAILURE:
      return assign({}, state, {
        status: {
          isFetching: false
        }
      });
    default:
      return state;
  }
}
