/*
Write a regex that matches any of the
strings cat, cot, cut, bat, bot, or but,
regardless of case.
*/
let array = "My cats, Butterscotch and Pudding, like to,sleep on my cot with me, but they cut my sleep,short with acrobatics when breakfast time rolls,around. I need a robotic cat feeder.".split(',');

array.forEach((elem) => {
  if (elem.match(/[cb][aou]t/)) {
    console.log(`${elem} matches`);
  }
});