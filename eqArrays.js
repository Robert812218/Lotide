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
      return "Arrays are not equal.";
    }
  }

  if (boolsonn) {
    return "Can confirm, these arrays are equal.";
  }
}

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
