import { FILTER_COLOR, SET_COLOR_LIST } from '../actionTypes';

export const filterColor = (payload) => {
  return {
    type: FILTER_COLOR,
    payload,
  };
};
export const setColorList = (payload) => {
  return {
    type: SET_COLOR_LIST,
    payload,
  };
};
