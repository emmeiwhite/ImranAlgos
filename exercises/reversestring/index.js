// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  /* ---  method1 --- */
  const strArray = Array.from(str);
  let finalString1 = strArray.reverse().join("");
  // return finalString1;

  /* ---  method2 --- little too much though */
  const strArray2 = [...str];
  let reverseArray = [];

  for (let i = strArray2.length - 1; i >= 0; i--) {
    // console.log(strArray2[i]);
    reverseArray.push(strArray2[i]);
    // console.log(reverseArray);
  }

  //   return reverseArray.join("");

  /* ---  method3 --- */
  let strArray3 = str.split("");
  let reverse = "";
  //   for (let i = strArray3.length - 1; i >= 0; i--) {
  //     reverse += strArray3[i];
  //   }

  /*--- avoiding for loop & instead using for-of loop because we can directly loop over string using for-of loop without having to convert string into an array---*/

  for (let char of str) {
    reverse = char + reverse;
    // here char must come first and then concatenated with reverse
  }

  return reverse;
}

// reverse("Life");

module.exports = reverse;
