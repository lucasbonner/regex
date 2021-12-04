/*
Base 20 digits include the decimal digits 0 through 9,
and the letters A through J in upper or lowercase.
Write a regex that matches base 20 digits.
*/

let array = "0xDEADBEEF,1234.5678,Jamaica,plow ahead".split(',');

array.forEach((elem) => {
  if (elem.match(/[0-9A-Ja-j]/)) {
    console.log(`${elem} matches`);
  }
});
