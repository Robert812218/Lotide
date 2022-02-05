const assertEqual = function(actual, expected) {
  const emoji = require('node-emoji');
  const go = emoji.get("white_check_mark");
  const nicht = emoji.get("question");

  if (actual === expected) {
    // console.log(`${go}${go}${go} Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else if (actual !== expected) {
    // console.log(`${nicht}${nicht}${nicht} Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

const eqArrays = function(arr1, arr2) {
  let boolsonn = true;
  for (let i = 0; i < arr1.length; i++) {
    if (!assertEqual(arr1[i], arr2[i])) {
      return false;
    }
  }

  if (boolsonn) {
    return true;    
  }
};

const assertArraysEqual = function(arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    return "Arrays are not equal.";
  } else {
    return "Can confirm, these arrays are equal.";
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}



const results1 = map(words, word => word[0]);
const results2 = map(items, item => item > 2);
const results3 = map(chunks, chunk => chunk !==);
console.log(results1);
console.log(results2);
console.log(results3);
