import * as actionTypes from './actionTypes';
import {apiFetchMeals, apiFetchMealById} from '../api';

const getMeals = () => {
  return {
    type: actionTypes.GET_MEALS
  };
};

const getMealsSuccess = (meals) => {
  return {
    type: actionTypes.GET_MEALS_SUCCESS,
    meals
  };
};

const getMealsFailure = (err) => {
  return {
    type: actionTypes.GET_MEALS_FAILURE,
    err
  };
};

export const fetchMeals = () => {
  return async dispatch => {
    dispatch(getMeals());
    const response = await apiFetchMeals();

    if (response.status >= 400) {
      dispatch(getMealsFailure(response.statusText));
    } else {
      const result = await response.json();
      dispatch(getMealsSuccess(result.results));
    }
  };
};

const getMealById = () => {
  return {
    type: actionTypes.GET_MEAL_BY_ID
  };
};

const getMealByIdSuccess = (meal) => {
  return {
    type: actionTypes.GET_MEAL_BY_ID_SUCCESS,
    meal
  };
};

const getMealByIdFailure = (err) => {
  return {
    type: actionTypes.GET_MEAL_BY_ID_FAILURE,
    err
  };
};

export const fetchMealById = (id) => {
  return async dispatch => {
    dispatch(getMealById());
    const response = await apiFetchMealById(id);

    if (response.status >= 400) {
      dispatch(getMealByIdFailure(response.statusText));
    } else {
      const result = await response.json();
      dispatch(getMealByIdSuccess(result));
    }
  };
};
