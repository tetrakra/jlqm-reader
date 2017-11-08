import initialState from './initialState';
import jlqmReader from '../modules/jlqm-reader';
import { READ_JLQM, FORMAT_JLQM } from '../actions/actionTypes';

export default function jlqm(state = initialState.text, action) {
  let newState;
  switch (action.type) {
    case READ_JLQM:
      console.log('reading...');
      newState = action.payload
      return newState;
    case FORMAT_JLQM:
      console.log('READ/FORMAT Action')
      const rawText = action.payload;

      return newState;
    default:
      return state;
  }
}
