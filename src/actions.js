export function setWidth(value) {
  return ({ type: 'SET_WIDTH', value });
}

export function setHeight(value) {
  return ({ type: 'SET_HEIGHT', value });
}

export function clearBoard() {
  return ({ type: 'CLEAR_BOARD' });
}

export function randomizeBoard() {
  return ({ type: 'RANDOMIZE_BOARD' });
}

export function stepBoardForward() {
  return ({ type: 'STEP_BOARD_FORWARD' });
}

export function stepBoardBackward() {
  return ({ type: 'STEP_BOARD_BACKWARD' });
}
