const { compare: natCompare } = require('natural-orderby');
const { IP } = require('ip-toolkit');

/**
 * Function to compare two hostnames
 * for use on Array.prototype.sort.
 *
 * @param {string} hostnameA
 * @param {string} hostnameB
 * @returns {number} it will return:
 * - 0 if hostnameA is the same with hostnameB
 * - -1 if hostnameA has lower weight than hostnameB
 * - 1 if hostnameA has higher value than hostnameB
 */
module.exports = (hostnameA, hostnameB) => {
  const sanitizedA = (hostnameA || '').trim().replace(/\.+/g, '.').replace(/\.$/, '');
  const sanitizedB = (hostnameB || '').trim().replace(/\.+/g, '.').replace(/\.$/, '');

  if (!sanitizedA && sanitizedB) return -1;
  if (sanitizedA && !sanitizedB) return 1;
  if (!sanitizedA && !sanitizedB) return 0;

  if (sanitizedA === sanitizedB) return 0;

  if (IP.isValidIP(sanitizedA) && IP.isValidIP(sanitizedB)) {
    return natCompare()(sanitizedA, sanitizedB);
  }

  const aItems = sanitizedA.trim().split('.').reverse();
  const bItems = sanitizedB.trim().split('.').reverse();

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
