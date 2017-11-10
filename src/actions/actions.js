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

export const displayOn = () => {
  return {
    type: types.DISPLAY_ON
  }
}

export const displayOff = () => {
  return {
    type: types.DISPLAY_OFF
  }
}

export const selectFile = (isSelected = false, fileName) => {
  return {
    type: types.SELECT_FILE,
    payload: isSelected,
    fileName: fileName
  }
}
