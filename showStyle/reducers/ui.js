import assign from 'lodash/assign';
import {
  TOGGLE_SIDEBAR,
  TOGGLE_OVERLAY,
  TOGGLE_CALL,
  TOGGLE_CANCEL_ORDER,
  TOGGLE_CHANGE_SEAT,
  INNER_DISPLAY,
  SET_LANGUAGE
} from '../actions/actionTypes';

const initUI = {
  sidebar: false,
  overlay: false,
  callCrew: false,
  display: {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  },
  cancelOrder: false,
  changeSeat: false,
  language: 'us'
};

export const ui = (state = initUI, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return assign({}, state, {sidebar: action.uiStatus});
    case TOGGLE_OVERLAY:
      document.querySelector('body').classList.toggle('overflow');
      return assign({}, state, {overlay: action.uiStatus});
    case TOGGLE_CALL:
      return assign({}, state, {callCrew: action.uiStatus});
    case INNER_DISPLAY:
      return assign({}, state, {
        display: {
          innerWidth: action.innerWidth,
          innerHeight: action.innerHeight
        }
      });
    case TOGGLE_CANCEL_ORDER:
      return assign({}, state, {cancelOrder: action.uiStatus});
    case TOGGLE_CHANGE_SEAT:
      return assign({}, state, {changeSeat: action.uiStatus});
    case SET_LANGUAGE:
      return assign({}, state, {language: action.language});
    default:
      return state;
  }
};
