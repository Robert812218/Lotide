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

const middle = function(arr) {
  if (arr.length < 3) {
    return [];
  } else if (arr.length % 2 !== 0) {
    while (arr.length > 1) {
      arr.shift();
      arr.pop();
    }

    return arr;
  } else if (arr.length % 2 === 0) {
    while (arr.length > 2) {
      arr.shift();
      arr.pop();
    }
    
    return arr;
  }
};

module.exports = middle;