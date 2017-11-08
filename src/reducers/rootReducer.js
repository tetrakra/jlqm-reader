import { combineReducers } from 'redux';
import jlqm from './textReducer';
import display from './displayReducer';

const rootReducer = combineReducers({
  text:jlqm,
  display:display
});

export default rootReducer;
