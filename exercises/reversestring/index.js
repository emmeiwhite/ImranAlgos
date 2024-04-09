// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
/* ---  method1 
function reverse(str) {
 
  let reversedArray = [];

  const length = str.length; // string value uses Wrapper String and that's where we got the length property from!

  // Convert string to array in JavaScript
  const arr = Array.from(str);
  // console.log(arr);

  for (let i = length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }

  return reversedArray.join("");
  

 
}
--- */

/* --- Method-2
function reverse(str) {
  let reverse = "";

  for (let ch of str) {
    reverse = ch + reverse;
  }
}
--- */

/* --- Method-3
function reverse(str) {
  const strArr = str.split("");
  return strArr.reverse().join("");
}
--- */

/* --- Method-4
function reverse(str) {
  return [...str].reverse().join("");
}
--- */

/*--- Method-5 ---*/

function reverse(str) {
  return str.split("").reduce((acc, curr) => {
    return (acc = curr + acc);
  }, "");
}
reverse("Life");

module.exports = reverse;
