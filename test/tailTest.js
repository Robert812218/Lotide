const tail = require('../tail');
const assertEqual = require('../assertEqual');
const { assert } = require('chai');
const words = ["Yo Yo", "Lighthouse", "Labs"];
const anotherArr = ["torque", "sailboat", 3, "7"];

tail(words);
assertEqual(words.length, 3);
assertEqual(anotherArr, words);