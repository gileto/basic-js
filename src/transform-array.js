const { container } = require("webpack");
const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
 if (!Array.isArray(arr)) {
  throw new Error("'arr' parameter must be an instance of the Array!");
 }
 if (arr.length === 0) {
  return [];
 }
 let result = [];
 //throw new NotImplementedError('Not implemented');
 for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "--double-next") {
   if (arr[i + 1] !== undefined) {
    result.push(arr[i + 1]);
    result.push(arr[i + 1]);
   }
  } else if (arr[i] === "--double-prev") {
   if (arr[i - 1] !== undefined) {
    result.push(result[result.length - 1]);
   }
  } else if (arr[i] === "--discard-prev") {
   if (arr[i - 1] !== undefined) {
    result.pop();
   }
  } else if (arr[i] === "--discard-next") {
   if (arr[i + 1] !== undefined) {
    i += 1;
   }
  } else {
   result.push(arr[i]);
  }
 }
 return result;
}

module.exports = {
 transform,
};
