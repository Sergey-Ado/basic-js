const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') return '';
  let res = '';
  let i0 = 0;
  while (i0 < str.length) {
    let i = i0;
    while (i < str.length) {
      i++;
      if (str[i] !== str[i0]) break;
    }
    const n = i - i0;
    if (n > 1) res += n;
    res += str[i0];
    i0 = i;
  }
  return res;
}

module.exports = {
  encodeLine,
};
