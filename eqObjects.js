const check = require('check-node-version');

const assertEqual = function(actual, expected) {
  const emoji = require('node-emoji');
  const go = emoji.get("white_check_mark");
  const nicht = emoji.get("question");

  if (actual === expected) {
    console.log(`${go}${go}${go} Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else if (actual !== expected) {
    console.log(`${nicht}${nicht}${nicht} Assertion Failed: ${actual} !== ${expected}`);
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


const eqObjects = function(object1, object2) {
  let kArr1 = [];
  let vArr1 = [];
  let kArr2 = [];
  let vArr2 = [];

  for (const [key, value] of Object.entries(object1)) {
    kArr1.push(key);
    vArr1.push(value);
  };

  for (const [key, value] of Object.entries(object2)) {
    kArr2.push(key);
    vArr2.push(value);
  }

  kArr1.sort();
  vArr1.sort();
  kArr2.sort();
  vArr2.sort();

  // console.log(kArr1);
  // console.log(kArr2);
  // console.log(vArr1);
  // console.log(vArr2);

  if (kArr1.length !== kArr2.length || vArr1.length !== vArr2.length) {
    return false;
  }

  const checkKeys = function(k1, k2) {
    for (let i = 0; i < k1.length; i++) {
      if ((k1[i].length !== k2[i].length) || (!eqArrays(k1[i], k2[i]))) {
        return false;
      }
    }
    return true;
  }

  const checkVals = function(v1, v2) {
    for (let j = 0; j < v1.length; j++) {
      if ((v1[j].length !== v2[j].length) || (!eqArrays(v1[j], v2[j]))) {
        return false;
      }
    }
    return true;
  }

  if (checkKeys(kArr1, kArr2) && checkVals(vArr1, vArr2)) {
    return `True: keys, \n${kArr1} \nVals:\n ${vArr2}`;
  } else {
    return `False.`;
  }
}

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false