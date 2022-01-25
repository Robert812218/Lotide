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

const tail = function(arr) {
  let output = arr.shift;

  if (arr.length <= 1) {
    return [];
  } else {
    return output;
  }
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);