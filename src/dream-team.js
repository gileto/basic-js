const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
 if (!Array.isArray(members)) {
  return false;
 }
 let result = [];
 let count = 0;

 for (let i of members) {
  if (typeof i == "string") {
   result.push(i.trim()[0].toUpperCase());
   count += 1;
  }
 }
 let sorted = result.sort();
 return count === 0 ? false : sorted.join("");
}

module.exports = {
 createDreamTeam,
};
