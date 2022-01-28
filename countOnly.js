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

const countOnly = function(allItems, itemsToCount) {
  const results = {};


  for (const i of allItems) {
    if (itemsToCount.hasOwnProperty(i)) {
      if (results[i]) {
        results[i] += 1;
      } else {
        results[i] = 1;
      }         
    }
  }

  return results;
};



const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }); 

console.log(result1);