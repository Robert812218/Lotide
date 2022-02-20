const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const flatten = function(arr) {

  let newArr = [];

  if (Array.isArray(arr)) {
    for (const i of arr) {
      if (Array.isArray(i)) {
        for (const j of i) {
          newArr.push(j);
        }
      } else {
        newArr.push(i);
      }
    }
  }
  return newArr;
};

module.exports = flatten;