/*
Write a regex that matches uppercase or
lowercase Ks or a lowercase s.
Test it with these strings:
*/
let array = "Kitchen Kaboodle,Reds and blues,kitchen Servers".split(',');

array.forEach((elem) => {
  if (elem.match(/[Kks]/)) {
    console.log(`${elem} matches`);
  }
});