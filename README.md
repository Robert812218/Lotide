

# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @Robert812218/lotide`

**Require it:**

`const _ = require('@Robert812218/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: checks if two arrays are equal
* `assertEqual(...)`: checks if two elements are equal
* `assertObjectEqual(...)`: checks if two objects are equal
* `countLetters(...)`: description
* `countOnly(...)`: checks if an object contains xyz, etc 
* `eqArrays(...)`: checks whether two arrays are equal
* `eqObjects(...)`: checks if two objects are exactly equal
* `findKey(...)`: finds a key in an object
* `findKeyByValue(...)`: finds a key in an object by value
* `flatten(...)`: flattens array
* `head(...)`:  finds the first element in an array
* `letterPositions(...)`: finds positions of letters
* `map(...)`: makes new array based on callback function
* `middle(...)`: finds middle element of array
* `reverse(...)`: reverses array 
* `tail(...)`: finds last element of array
* `takeUntil(...)`: takes elements of array until something returns true
* `without(...)`: removes array elements