const countLetters = (inp) => {
  let out = {};
  for (const i of inp) {
    // adds 1 to existing letter
    if (out.hasOwnProperty(i)) {
      out[i]++;
    } else {
      // creates letter and sets value to 1
      out[i] = 1;
    }
  }
  return out;
}

module.exports = countLetters;