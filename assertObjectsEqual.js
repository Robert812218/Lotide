// imports functions
const check = require('check-node-version');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const assertObjectsEqual = function(object1, object2) {
  let kArr1 = [];
  let vArr1 = [];
  let kArr2 = [];
  let vArr2 = [];

  // Object.entries separates the two input objects into arrays
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


  if (kArr1.length !== kArr2.length || vArr1.length !== vArr2.length) {
    return false;
  }

  // compares each element of the keys arrays
  const checkKeys = function(k1, k2) {
    for (let i = 0; i < k1.length; i++) {
      if ((k1[i].length !== k2[i].length) || (!eqArrays(k1[i], k2[i]))) {
        return false;
      }
    }
    return true;
  }

  // compares each element of the values arrays
  const checkVals = function(v1, v2) {
    for (let j = 0; j < v1.length; j++) {
      if ((v1[j].length !== v2[j].length) || (!eqArrays(v1[j], v2[j]))) {
        return false;
      }
    }
    return true;
  }

  if (assertEqual(checkKeys(kArr1, kArr2), checkVals(vArr1, vArr2))) {
    return true;
  } else {
    return false;
  }
}

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2)); // => false