import initialState from './initialState';
import { READ_JLQM, FORMAT_JLQM, DISPLAY_TEXT } from '../actions/actionTypes';

export default function jlqm(state = initialState.text, action) {
  let newState;
  switch (action.type) {
    case READ_JLQM:
      console.log('reading...');
      return action.payload;
    case FORMAT_JLQM:
      console.log('READ/FORMAT Action')
      return action.payload;
    case DISPLAY_TEXT:
      newState = action.payload;
      console.log('DISPLAY Action')
      return newState;
    default:
      return state;
  }
}
