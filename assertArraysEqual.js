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

console.log(assertArraysEqual([5, 5, 2], [5, 5, 2]), true);
console.log(assertArraysEqual([4, 3, 2], [4, 3, 1]), false);