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

// The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

// For arrays with one or two elements, there is no middle. Return an empty array.
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
// For arrays with odd number of elements, an array containing a single middle element should be returned.
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]