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
  
  return arr;
}

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without(["yuh", "yuh", 55, 100], ["yuh", "torque", 55, 200]));