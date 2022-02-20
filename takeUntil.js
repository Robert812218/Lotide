const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(input, callback) {
  let arr = [];
  
  for (const i of input) {
    if (callback(i)) {
      return arr;
    }
    arr.push(i);
  }
};

module.exports = takeUntil;