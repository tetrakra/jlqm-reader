import initialState from './initialState';
import { DISPLAY_ON, DISPLAY_OFF } from '../actions/actionTypes';

export default function display(state = initialState.display, action){
  // let newState;
  switch (action.type) {
    case DISPLAY_ON:
      return true
    case DISPLAY_OFF:
      return false
    default:
      return state;
  }
}
