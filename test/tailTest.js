const tail = require('../tail');
const assertEqual = require('../assertEqual');
const { assert } = require('chai');
const words = ["Yo Yo", "Lighthouse", "Labs"];

// describe("#head", () => {
//   it("returns 1 for [1, 2, 3]", () => {
//     assert.strictEqual(head([1, 2, 3]), 1);
//   })

//   it("returns '5' for ['5']", () => {
//     assert.strictEqual(head(['5']), '5'); 
//   });
// });

describe('#tail', () => {
  it("returns 'Labs' for [Yo Yo, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), "Labs");
  })
});

tail(words);
assertEqual(words.length, 3);