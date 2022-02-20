const assertEqual = require("./assertEqual");

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const i of allItems) {
    if (itemsToCount.hasOwnProperty(i)) {
      if (results[i]) {
        results[i] += 1;
      } else {
        results[i] = 1;
      }         
    }
  }
  return results;
};

module.exports = countOnly;