const assertEqual = function(actual, expected) {
  const emoji = require('node-emoji');
  const go = emoji.get("white_check_mark");
  const nicht = emoji.get("question");

  if (actual === expected) {
    console.log(`${go}${go}${go} Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`${nicht}${nicht}${nicht} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  if (arr.length < 1) {
    return undefined;
  } else {
    return arr[0];
  }
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["TORQUE", "TRON", "GUACAMOLE"]), 999999999);
assertEqual(head([]), 10);