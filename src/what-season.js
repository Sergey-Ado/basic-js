const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  try {
    if (date === undefined) return 'Unable to determine the time of year!';
    const time = date.getTime();
    const month = date.getMonth() + 1;
    const season = Math.floor(month / 3);
    switch (season) {
      case 1:
        return 'spring';
      case 2:
        return 'summer';
      case 3:
        return 'autumn';
      case 0:
      case 4:
        return 'winter';
    }
  } catch {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason,
};
