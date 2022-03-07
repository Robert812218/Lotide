const map = require('../map');

const results1 = map(words, word => word[0]);
const results2 = map(items, item => item > 2);
const results3 = map(chunks, chunk => chunk !== 0);
console.log(results1);
console.log(results2);
console.log(results3);