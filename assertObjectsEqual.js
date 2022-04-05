const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(object1, object2) {
  if (eqObjects(object1, object2)) {
    console.log("Objects are equal.");
  } else {
    console.log("Objects are not equal.");
  }
};

module.exports = assertObjectsEqual;