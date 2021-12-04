/*
Write a regex that matches an uppercase or lowercase H.
*/
let array = "Henry,perch,golf".split(',');

array.forEach((elem) => {
  if (elem.match(/h/i)) {
    console.log(`${elem} matches`);
  }
});