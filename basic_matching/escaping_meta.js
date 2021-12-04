let array = "(cat|dog),bird(cat|dog)zebra,cat,dog".split(',');

array.forEach((elem) => {
  if (elem.match(/\(cat\|dog|\)/)) {
    console.log(`${elem} matches`);
  }
});

/* /\(cat\|dog|\)/
/* every '\' escapes the following character, here it appears before '(' '|' and ')'