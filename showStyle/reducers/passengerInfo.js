import assign from 'lodash/assign';
import {
  SET_AUTH_COOKIE,
  SET_CREW_CALL,
  CANCEL_CREW_CALL
} from '../actions/actionTypes';

const initPassengerInfo = {
  seatNo: '',
  name: '',
  isLogin: false,
  isCall: false,
  cart: {}
};

export const passengerInfo = (state = initPassengerInfo, action) => {
  switch (action.type) {
    case SET_AUTH_COOKIE:
      return assign({}, state, {
        seatNo: action.seatNo,
        name: action.name,
        isLogin: true
      });
    case SET_CREW_CALL:
      return assign({}, state, {isCall: true});
    case CANCEL_CREW_CALL:
      return assign({}, state, {isCall: false});
    default:
      return state;
  }
};
