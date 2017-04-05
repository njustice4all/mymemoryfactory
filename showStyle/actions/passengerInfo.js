import {
  SET_AUTH_COOKIE,
  SET_CREW_CALL,
  CANCEL_CREW_CALL
} from './actionTypes';

export const setAuthCookie = (seatNo, name) => {
  return {
    type: SET_AUTH_COOKIE,
    seatNo,
    name
  };
};

export const setCrewCall = () => {
  return {
    type: SET_CREW_CALL
  };
};

export const cancelCrewCall = () => {
  return {
    type: CANCEL_CREW_CALL
  };
};
