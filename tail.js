const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let output = arr.shift;

  if (arr.length <= 1) {
    return [];
  } else {
    return output;
  }
};

module.exports = tail;