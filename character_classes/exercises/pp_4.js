/*
Write a regex that matches any letter except x or X
*/

let array = "0x1234,Too many XXXXXXXXXXxxxxxxXXXXXXXXXXXX to count.,The quick brown fox jumps over the lazy dog,THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG".split(',');

array.forEach((elem) => {
  if (elem.match(/[A-WYXa-wyz]/i)) {
    console.log(`${elem} matches!`);
  }
});