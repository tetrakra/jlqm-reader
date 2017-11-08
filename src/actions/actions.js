import * as types from './actionTypes';

export const readJLQM = (file) => {
  return {
    type: types.READ_JLQM,
    payload:file
  }
}

export const formatJLQM = (raw) => {
  return {
    type: types.FORMAT_JLQM,
    payload:raw
  }
}
