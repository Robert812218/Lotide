const tail = require('../tail');
const assertEqual = require('../assertEqual');
const { assert } = require('chai');
const words = ["Yo Yo", "Lighthouse", "Labs"];


tail(words);
assertEqual(words.length, 3);