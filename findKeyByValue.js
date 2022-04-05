const findKeyByValue = function(obj, val) {
  
  for (const i in obj) {
    if (obj[i] === val) {
      console.log(`${obj[i]}: ${i}`);
      return i;
    }
  }
};

module.exports = findKeyByValue;

