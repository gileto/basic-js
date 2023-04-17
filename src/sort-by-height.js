const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
 //throw new NotImplementedError('Not implemented');
 let sorted = arr.filter((a) => a !== -1).sort((a, b) => a - b);
 for (let i of arr) {
  if (i !== -1) {
   i = null;
  }
 }
 let result = [];
 let index = 0;
 for (let i of arr) {
  if (i !== -1) {
   i = sorted[index];
   index += 1;
  }
  result.push(i);
 }
 return result;
}

module.exports = {
 sortByHeight,
};
