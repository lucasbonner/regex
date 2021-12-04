let array = ['chris:x:300', 'A thought; no, forget it.', ':::::'];

array.forEach((elem) => {
  if (elem.match(/:/)) {
    console.log(elem, " is a match!");
  }
});