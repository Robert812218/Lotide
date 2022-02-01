const check = require("check-node-version");

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

// const letterPositions = function (sentence) {
//   let results = {};
//   let count = 0;

//   const scanner = (obj, char) => {
//     let scanPosition = 0;
//     let keyArr = Object.keys(obj);
//     let newArr = [];

//     for (const z of keyArr) {
//       if (z === char) {
//         newArr.push(scanPosition);
//       }
//       scanPosition++;
//     }

//     if (newArr.length > 0) {
//       return newArr;
//     } else {
//       return false;
//     }
//   }

//   for (let i = 0; i < sentence.length; i++) {
//     let char = sentence[i];
//     // let scanResult = scanner(results, char);

//     if ((char !== " ") && (scanner(results, char) === false)) {
//       results[sentence[i]] = [];
//       results[sentence[i]].push(char);      
//       // console.log(`Nope: ${results[sentence[i]]}`)
//     } else if ((char !== " ") && (scanner(results, char))) {
//       let spot = scanner(results, char);
//       let newPosition = scanner(results, char);

      
//       results[sentence[i]].push(spot);
      
//     } 
//   }
//   return results;
// }

const letterPositions = function(sentence) {
  let results = {};
  let str = sentence.toLowerCase();
  let alph = "abcdefghijklmnopqrstuvwxyz";
  // loop through alphabet\
  const map1 = new Map(); 

  const check = function(char, string) {
    let subArr = [];
    let count = 0;
    
    for (const z of string) {
      if (z === char && z !== " ") {
        subArr.push(count);
      }
      count++;
    }
    if (subArr.length > 0) {
      return subArr;
    } else {
      return false;
    }
  }



  for (const i of alph) {
    if (check(i, str) !== false) {
      let arr = check(i, str);
      map1.set(i, arr);
    }
  }

  return map1;
  // return results;
};

console.log(letterPositions("OLIOLIOLIOOOOOOOO"));
console.log(letterPositions("npm does not support Node"));
console.log(letterPositions("TORQUINGTON"));