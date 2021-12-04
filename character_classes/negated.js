let array = "yes,a,by,+/-,ABCXYZ,y,yyyyy,yyayy".split(',');

array.forEach((elem) => {
  if (elem.match(/[^y]/)) {
    console.log(`${elem} matches`);
  }
});