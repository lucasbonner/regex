/*
Write a regex that matches a comma or space.
*/

let str1 = "This line has spaces";
let str2 = "This,line,has,commas,";
let str3 = "No-spaces-or-commas";
let array = [str1, str2, str3];

array.forEach((elem) => {
  if (elem.match(/(,| )/)) {
    console.log(`${elem} matches`);
  }
});