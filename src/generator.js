/* eslint no-console: 0 */
const createBoard = (w, h, board, func) => {
  const array = new Array(w);
  for (let i = 0; i < w; i += 1) {
    array[i] = new Array(h);
    for (let j = 0; j < h; j += 1) {
      array[i][j] = func(i, j, board);
    }
  }
  return array;
};

exports.new = (w, h) => createBoard(w, h, {}, () => 0);
exports.randomize = (w, h) => createBoard(w, h, {}, () => Math.round(Math.random()));

const getCell = (w, h, board) => {
  try {
    return board[w][h] || 0;
  } catch (e) {
    return 0;
  }
};

const getLiveCountInArea = (x, y, board) =>
  getCell(x - 1, y - 1, board) +
  getCell(x + 0, y - 1, board) +
  getCell(x + 1, y - 1, board) +
  getCell(x - 1, y + 0, board) +
  getCell(x + 0, y + 0, board) +
  getCell(x + 1, y + 0, board) +
  getCell(x - 1, y + 1, board) +
  getCell(x + 0, y + 1, board) +
  getCell(x + 1, y + 1, board);

const getNextState = (x, y, board) => {
  const alive = getCell(x, y, board);
  const liveNeighbors = getLiveCountInArea(x, y, board) - (alive ? 1 : 0);
  return (alive ? (liveNeighbors === 2 || liveNeighbors === 3) : liveNeighbors === 3) ? 1 : 0;
};

exports.step = board => createBoard(board.length, board[0].length, board, getNextState);
