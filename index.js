const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const assertEqualTest = require('./assertEqualTest');
//
const eqObjects = require('./eqObjects');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const countOnly = require('./countOnly');

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  eqArrays: eqArrays,
  assertEqualTest: assertEqualTest,
  eqObjects: eqObjects,
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  countOnly: countOnly
};