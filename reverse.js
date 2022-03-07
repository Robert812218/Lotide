const { fileURLToPath } = require("url");

const reverse = (inp) => {
  let output = [];

  const flip = (unit) => {
    let str = "";
      for (let j = unit.length; j >= 0; j--) {
        str += unit[j];
      }
    console.log(str);
    // return str;
  }

  for (const i of inp) {
    output.push(flip(i));
  }

  return output;
};


module.exports = reverse;