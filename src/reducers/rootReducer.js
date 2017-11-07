import { combineReducers } from 'redux';
import jlqm from './textReducer';

const rootReducer = combineReducers({
  text:jlqm
});

export default rootReducer;
