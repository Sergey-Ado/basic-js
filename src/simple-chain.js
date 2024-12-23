const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  getLength() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    if (this.array === undefined) this.array = [`( ${value} )`];
    else this.array.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (isNaN(+position) || position <= 0 || position > this.array.length) {
      this.array = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.array.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    const res = [...this.array];
    this.array = [];
    return res.join('~~');
  },
};

module.exports = {
  chainMaker,
};
