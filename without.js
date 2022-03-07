const flatten = require('./flatten');

const without = function(source, itemsToRemove) {
  let arr = [];

  let sweeperoni = function(item, scan) {
    for (const j of scan) {
      if (item === j) {
        return false;
      }
    }
    return true;
  }

  for (const i of source) {
    if (sweeperoni(i, itemsToRemove)) {
      arr.push([i]);
    }
  }
  
  return flatten(arr);
}

module.exports = without;