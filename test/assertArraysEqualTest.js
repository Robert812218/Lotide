const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

console.log(assertArraysEqual([5, 5, 2], [5, 5, 2]), true);
console.log(assertArraysEqual([4, 3, 2], [4, 3, 1]), false);