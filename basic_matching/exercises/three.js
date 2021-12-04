/*
Write a regex that matches the string dragon
*/
let array = "snapdragon,bearded dragon,dragoon".split(',');

array.forEach((elem) => {
  if (elem.match(/dragon/)) {
    console.log(`${elem} matches dragon`);
  }
});