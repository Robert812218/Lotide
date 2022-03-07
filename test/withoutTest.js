const without = require('../without');

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without(["yuh", "yuh", 55, 100], ["yuh", "torque", 55, 200]));