let array = "a2,Model 640c1,a1 a2 a3 b1 b2 b3 c1 c2 c3 d1 d2 d3".split(',');

array.forEach((elem) => {
  if (elem.match(/[abc][12]/)) {
    console.log(`${elem} is a match!`);
  }
})