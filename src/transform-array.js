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
 //throw new NotImplementedError('Not implemented');
 let result = [];
 if (!Array.isArray(arr)) {
  throw new Error("'arr' parameter must be an instance of the Array!");
 }
 for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "--double-prev" && result.length === 0) {
   continue;
  }
  if (arr[i] === "--double-next" && i === arr.length - 1) {
   continue;
  } else if (
   (arr[i - 1] === "--discard-next" && arr[i + 1] === "--double-prev") ||
   (arr[i] === "--double-prev" && arr[i - 2] === "--discard-next")
  ) {
   continue;
  }
  if (arr[i] === "--discard-prev") {
   result.pop();
  } else if (arr[i] === "--double-prev") {
   result.push(result[result.length - 1]);
  } else if (arr[i] === "--double-next") {
   result.push(arr[i + 1]);
  } else if (arr[i] === "--discard-next") {
   continue;
  } else {
   result.push(arr[i]);
  }
 }
 return result;
}

module.exports = {
 transform,
};
