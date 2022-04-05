const assertEqual = require('./assertEqual');

const tail = function(arr) {
  const newArr = arr.slice(1, arr.length);
  console.log(newArr);
  return newArr;
};

module.exports = tail;