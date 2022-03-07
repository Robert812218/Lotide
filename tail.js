const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let mid = arr.reverse();
  mid.pop();
  let output = mid.reverse;
  
  // let output = arr.shift;

  if (arr.length <= 1) {
    return [];
  } else {
    return output;
  }
};

module.exports = tail;