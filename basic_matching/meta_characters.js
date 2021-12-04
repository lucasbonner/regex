let str1 = '?';
let str2 = "What's up, doc?";
let str3 = "Silence!";
let str4 = "What's that?";

let array = [str1, str2, str3, str4];
array.forEach((elem) => {
  if (elem.match(/\?/)) {
    console.log(elem + " matches ?");
  }
});