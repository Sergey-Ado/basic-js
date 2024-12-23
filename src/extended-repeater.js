const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = '';
  let {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator,
  } = options;
  str = '' + str;
  repeatTimes = repeatTimes || 1;
  separator = separator || '+';
  if (addition === undefined) addition = '';
  additionRepeatTimes = additionRepeatTimes || 1;
  additionSeparator = additionSeparator || '|';
  for (let i = 0; i < repeatTimes; i++) {
    let addStr = str;
    for (let j = 0; j < additionRepeatTimes; j++) {
      addStr += addition;
      if (j < additionRepeatTimes - 1) addStr += additionSeparator;
    }
    res += addStr;
    if (i < repeatTimes - 1) res += separator;
  }
  return res;
}

module.exports = {
  repeater,
};
