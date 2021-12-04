/*
Write a regex that matches any character that is not a letter.
*/

let array = "0x1234abcd,1,000,000,000s and 1,000,000,000s.,THE quick BROWN fox JUMPS over THE lazy DOG!".split(',');

array.forEach((elem) => {
  if (elem.match(/[^A-Za-z]/)) {
    console.log(`${elem} matches`);
  }
});