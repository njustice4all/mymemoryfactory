import {combineReducers} from 'redux';

import {passengerInfo} from './passengerInfo';
import {ui} from './ui';
import {meals} from './meals';

export const reducers = combineReducers({
  passengerInfo,
  ui,
  meals
});
