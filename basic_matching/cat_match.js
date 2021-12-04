let array = "cat, catalog, copycat, scatter, the lazy cat., CAT, cast".split(',');

array.forEach((elem) => {
  if (elem.match(/cat/)) {
    console.log("We got a match! It's", elem);
  }
});