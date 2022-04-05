const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    return "Arrays are not equal.";
  } else {
    return "Can confirm, these arrays are equal.";
  }
};

module.exports = assertArraysEqual;