import * as types from './actionTypes';

export const readJLQM = (file) =>{
  return{
    type: types.READ_JLQM,
    payload: file
  }
}
