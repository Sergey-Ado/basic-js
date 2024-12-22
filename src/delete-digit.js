const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr0 = n.toString().split('');
  let min = 0;
  for (let i = 0; i < arr0.length; i++) {
    const arr = [...arr0];
    arr.splice(i, 1);
    const num = +arr.join('');
    if (num > min) min = num;
  }
  return min;
}

module.exports = {
  deleteDigit,
};
