const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = new Map();
  domains.forEach((s) => {
    const arr = s.split('.');
    for (let i = 0; i < arr.length; i++) {
      const key = '.' + arr.slice(i).reverse().join('.');
      if (res.has(key)) res.set(key, res.get(key) + 1);
      else res.set(key, 1);
    }
  });
  return Object.fromEntries(res);
}

module.exports = {
  getDNSStats,
};
