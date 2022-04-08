const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];
const items = ["item1", "item2", "item3", "item4", "item5"];
const chunks = ["chunk1", "chunk2", "chunk3", "chunk4", "chunk5"];

const results1 = map(words, word => word[0]);
const results2 = map(items, item => item > 2);
const results3 = map(chunks, chunk => chunk !== 0);

console.log(results1);
console.log(results2);
console.log(results3);