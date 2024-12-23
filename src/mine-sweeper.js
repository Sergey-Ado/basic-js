const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const res = Array(matrix.length).fill(0);
  for (let i = 0; i < res.length; i++) res[i] = Array(matrix[i].length).fill(0);
  for (let i = 0; i < res.length; i++)
    for (let j = 0; j < res[i].length; j++) {
      let sum = 0;
      for (let di = -1; di <= 1; di++)
        for (let dj = -1; dj <= 1; dj++) {
          const newI = i + di;
          const newJ = j + dj;
          if (
            newI >= 0 &&
            newI < res.length &&
            newJ >= 0 &&
            newJ < res[i].length
          )
            if (!(newI === i && newJ === j)) if (matrix[newI][newJ]) sum++;
        }
      res[i][j] = sum;
    }
  return res;
}

module.exports = {
  minesweeper,
};
