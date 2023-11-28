const { compare: natCompare } = require('natural-orderby');

/**
 * Function to compare two hostnames
 * for use on array sorting
 * @param {string} a
 * @param {string} b
 * @returns {number}
 */
module.exports = (a, b) => {
  if (!a && b) return -1;
  if (a && !b) return 1;
  if (!a && !b) return 0;

  if (a === b) return 0;

  const aItems = a.trim().split('.').reverse();
  const bItems = b.trim().split('.').reverse();

  const count = Math.min(aItems.length, bItems.length);
  for (let i = 0; i < count; i += 1) {
    const compareResult = natCompare()(aItems[i], bItems[i]);
    if (compareResult) return compareResult;
  }

  if (aItems.length < bItems.length) {
    return -1;
  }

  return 1;
};
