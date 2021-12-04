let array = "The lazy cat.,The dog barks.,Down the rabbit hole.,The lazy cat, chased by the barking dog,,dives down the rabbit hole.,catalog,The Yellow Dog,My bearded dragon's name is Darwin".split(',');

array.forEach((elem) => {
  if (elem.match(/(cat|dog|rabbit)/)) {
    console.log(`${elem} matches either cat, dog or rabbit`);
  }
});