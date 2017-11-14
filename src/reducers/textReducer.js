import initialState from './initialState';
import jlqmReader from '../modules/jlqm-reader';
import { READ_JLQM, FORMAT_JLQM, SELECT_FILE } from '../actions/actionTypes';

export default function jlqm(state = initialState.text, action) {
  switch (action.type) {
    case READ_JLQM:
      console.log('reading...');
      let rawText;
      rawText = action.payload
      return Object.assign({},state,{rawText});
    case FORMAT_JLQM:
      console.log('READ/FORMAT Action')
      let extractedText = jlqmReader(action.payload);
      return Object.assign({},state,{extractedText});
    case SELECT_FILE:
      console.log('FILE SELECTED');
      let fileStatus = action.payload;
      let fileName = action.fileName || "*.jlqm";
      return Object.assign({},state,{fileStatus,fileName})
    default:
      return state;
  }
}
