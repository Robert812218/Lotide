const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


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
    // console.log(`True: keys, \n${kArr1} \nVals:\n ${vArr2}`);
    return true;
  } else {
    return false;
  }
}

module.exports = eqObjects;