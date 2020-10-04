const a = 97;
const z = 122;
const A = 65;
const Z = 90;

const caesarEngine = (str, shift, action) => {
  let resultStr = '';
  let step = 0;
  let code = 0;
  shift = shift % 26;

  if (action === 'encode') {
    for (let i = 0; i < str.length; i++) {
      if (str[i].charCodeAt() >= a && str[i].charCodeAt() <= z) {

        if (str[i].charCodeAt() + shift > z) {
          step = str[i].charCodeAt() + shift - z;
          code = a + step - 1;
        } else {
          code = str[i].charCodeAt() + shift;
        }

        resultStr += String.fromCharCode(code);
        continue;
      }

      if (str[i].charCodeAt() >= A && str[i].charCodeAt() <= Z) {

        if (str[i].charCodeAt() + shift > Z) {
          step = str[i].charCodeAt() + shift - Z;
          code = A + step - 1;
        } else {
          code = str[i].charCodeAt() + shift;
        }

        resultStr += String.fromCharCode(code);
        continue;
      }

      resultStr += str[i];
    }
  }

  if (action === 'decode') {
    for (let i = 0; i < str.length; i++) {
      if (str[i].charCodeAt() >= a && str[i].charCodeAt() <= z) {

        if (str[i].charCodeAt() - shift < a) {
          step = a - (str[i].charCodeAt() - shift);
          code = z - step + 1;
        } else {
          code = str[i].charCodeAt() - shift;
        }

        resultStr += String.fromCharCode(code);
        continue;
      }

      if (str[i].charCodeAt() >= A && str[i].charCodeAt() <= Z) {

        if (str[i].charCodeAt() - shift < A) {
          step = A - (str[i].charCodeAt() - shift);
          code = Z - step + 1;
        } else {
          code = str[i].charCodeAt() - shift;
        }

        resultStr += String.fromCharCode(code);
        continue;
      }

      resultStr += str[i];
    }
  }

  return resultStr;
}

module.exports = caesarEngine;