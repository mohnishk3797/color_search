import { FILTER_COLOR, SET_COLOR_LIST } from '../actionTypes';
const initialState = {
  colorListData: [],
  matchedColor: [],
};

export const colorListReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLOR_LIST:
      return Object.assign({}, state, { colorListData: action.payload });
    case FILTER_COLOR:
      let matchedColor = [];
      if (action.payload.length > 2) {
        matchedColor = state.colorListData.filter(
          (color) =>
            color['name'].toLowerCase().indexOf(action.payload.toLowerCase()) >
            -1
        );
      }
      return Object.assign({}, state, {
        matchedColor: matchedColor,
      });
    default:
      return state;
  }
};
