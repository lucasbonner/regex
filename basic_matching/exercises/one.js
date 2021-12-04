/*
Write a regex that matches an uppercase K. Test it with these strings:
*/

let array = "Kx,BlacK,kelly".split(',');

array.forEach((elem) => {
  if (elem.match(/K/)) {
    console.log(`${elem} matches`);
  }
});