const countLetters = (inp) => {
  let out = {};
  for (const i of inp) {
    if (out.hasOwnProperty(i)) {
      out[i]++;
    } else {
      out[i] = 1;
    }
  }
  return out;
}

console.log(countLetters("YYYONKERONI"));