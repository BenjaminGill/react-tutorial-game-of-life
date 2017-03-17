import { combineReducers } from 'redux';
import * as boardFunctions from './generator';

const initialState = {
  height: 20,
  width: 20,
  tiles: boardFunctions.randomize(20, 20),
};

const board = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_HEIGHT':
      return Object.assign({}, state, {
        height: action.value,
        tiles: boardFunctions.new(state.width, action.value),
      });
    case 'SET_WIDTH':
      return Object.assign({}, state, {
        width: action.value,
        tiles: boardFunctions.new(action.value, state.height),
      });
    case 'CLEAR_BOARD':
      return Object.assign({}, state, {
        tiles: boardFunctions.new(state.width, state.height),
      });
    case 'RANDOMIZE_BOARD':
      return Object.assign({}, state, {
        tiles: boardFunctions.randomize(state.width, state.height),
      });
    case 'STEP_BOARD_FORWARD':
      return Object.assign({}, state, {
        tiles: boardFunctions.step(state.tiles),
      });
    case 'STEP_BOARD_BACK':
    default:
      return state;
  }
};

export default combineReducers({ board });
