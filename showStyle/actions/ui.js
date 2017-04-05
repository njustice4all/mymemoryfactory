import {
  TOGGLE_SIDEBAR,
  TOGGLE_OVERLAY,
  TOGGLE_CALL,
  TOGGLE_CANCEL_ORDER,
  TOGGLE_CHANGE_SEAT,
  INNER_DISPLAY,
  SET_LANGUAGE
} from './actionTypes';

export const toggleSidebar = uiStatus => {
  return {
    type: TOGGLE_SIDEBAR,
    uiStatus
  };
};

export const toggleOverlay = uiStatus => {
  return {
    type: TOGGLE_OVERLAY,
    uiStatus
  };
};

export const toggleCall = uiStatus => {
  return {
    type: TOGGLE_CALL,
    uiStatus
  };
};

export const innerDisplay = (innerWidth, innerHeight) => {
  return {
    type: INNER_DISPLAY,
    innerWidth,
    innerHeight
  };
};

export const toggleCancelOrder = uiStatus => {
  return {
    type: TOGGLE_CANCEL_ORDER,
    uiStatus
  };
};

export const toggleChangeSeat = uiStatus => {
  return {
    type: TOGGLE_CHANGE_SEAT,
    uiStatus
  };
};

export const setLanguage = language => {
  return {
    type: SET_LANGUAGE,
    language
  };
};
