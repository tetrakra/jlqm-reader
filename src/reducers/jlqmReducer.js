import initialState from './initialState';
import { FORMAT_JLQM, DISPLAY_TEXT } from '../actions/actionTypes';

export default function jlqm(state = initialState.jlqm, action) {
  let newState;
  switch (action.type) {
    case FORMAT_JLQM:
      console.log('READ/FORMAT Action')
      return action;
    case DISPLAY_TEXT:
      newState = action.jlqm;
      console.log('DISPLAY Action')
      return newState;
    default:
      return state;
  }
}
