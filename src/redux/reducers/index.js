import { combineReducers } from 'redux';
import { colorListReducers } from './colorList.reducer';
export default combineReducers({
  colorList: colorListReducers,
});
