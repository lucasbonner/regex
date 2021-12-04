let array = "I love Launch School!,LAUNCH SCHOOL! Gotta love it!,launchschool.com".split(',');

array.forEach((elem) => {
  if (elem.match(/launch/i)) {
    console.log(`${elem} matches`);
  }
});

/* the '/i' ignores case