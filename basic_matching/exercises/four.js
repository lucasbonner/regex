/*
Write a regex that matches any of the following fruits:
banana, orange, apple, strawberry. The fruits may
appear in other words
*/
let array = "banana,orange,pineapples,strawberry,raspberry,grappler".split(',');

array.forEach((elem) => {
  if (elem.match(/(banana|orange|apple|strawberry)/)) {
    console.log("We got ourselves a match with:", elem);
  }
});
