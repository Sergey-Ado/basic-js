const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1, arr2;
  if (s1.length < s2.length) {
    arr1 = s1.split('');
    arr2 = s2.split('');
  } else {
    arr1 = s1.split('');
    arr2 = s2.split('');
  }
  const res = [];
  for (let s of arr1) {
    const index = arr2.findIndex((c) => c === s);
    if (index !== -1) {
      res.push(s);
      arr2.splice(index, 1);
    }
  }
  return res.length;
}

module.exports = {
  getCommonCharacterCount,
};
