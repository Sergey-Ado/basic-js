const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
  }

  genKey(message, key) {
    let res = '';
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if (/[A-Z]/.test(message[i])) {
        res += key[j];
        j++;
        if (j === key.length) j = 0;
      } else res += ' ';
    }
    return res;
  }

  testInput(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string')
      throw new Error('Incorrect arguments!');
  }

  encrypt(message, key) {
    this.testInput(message, key);
    message = message.toUpperCase();
    key = key.toUpperCase();
    key = this.genKey(message, key);
    let res = '';
    for (let i = 0; i < message.length; i++) {
      if (/[A-Z]/.test(message[i])) {
        const mMessage = message.charCodeAt(i) - 65;
        const mKey = key.charCodeAt(i) - 65;
        res += String.fromCharCode(((mMessage + mKey) % 26) + 65);
      } else res += message[i];
    }
    if (!this.reverse) res = res.split('').reverse().join('');
    return res;
  }

  decrypt(message, key) {
    this.testInput(message, key);
    message = message.toUpperCase();
    key = key.toUpperCase();
    key = this.genKey(message, key);
    let res = '';
    for (let i = 0; i < message.length; i++) {
      if (/[A-Z]/.test(message[i])) {
        const mMessage = message.charCodeAt(i) - 65;
        const mKey = key.charCodeAt(i) - 65;
        res += String.fromCharCode(((mMessage - mKey + 26) % 26) + 65);
      } else res += message[i];
    }
    if (!this.reverse) res = res.split('').reverse().join('');
    return res;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
