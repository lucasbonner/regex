let array = "Four Score And Seven,abcdefghijklmnopqrstuvwxyz,123 hello +/* bye".split(',');

array.forEach((elem) => {
  if (elem.match(/[^aeiou]/)) {
    console.log(`${elem} matches`);
  }
});