const check = require("check-node-version");
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function(sentence) {
  let results = {};
  let str = sentence.toLowerCase();
  let alph = "abcdefghijklmnopqrstuvwxyz";
  // loop through alphabet\
  const map1 = new Map(); 

  const check = function(char, string) {
    let subArr = [];
    let count = 0;
    
    for (const z of string) {
      if (z === char && z !== " ") {
        subArr.push(count);
      }
      count++;
    }
    if (subArr.length > 0) {
      return subArr;
    } else {
      return false;
    }
  }

  for (const i of alph) {
    if (check(i, str) !== false) {
      let arr = check(i, str);
      map1.set(i, arr);
    }
  }

  return map1;
};

module.exports = letterPositions;