// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/* --- Solution-1
function reverseInt(n) {
  let input = parseInt(n);
  let isNegative = false;

  if (input < 0) {
    input = Math.abs(input);
    isNegative = true;
  }

  let output = "";
  let r;

  while (input > 0) {
    r = input % 10;
    input = Math.floor(input / 10);
    output += r;
  }

  // Find the index of the first non-zero character
  let nonZeroIndex = 0;
  while (output.charAt(nonZeroIndex) === "0") {
    nonZeroIndex++;
  }

  // Slice the string to remove leading zeros
  output = output.slice(nonZeroIndex);

  // Add back the negative sign if needed
  if (isNegative) {
    output = "-" + output;
  }

  return Number(output);
}*/

/* ---
function reverseInt(n) {
  let input = parseInt(n);
  let isNegative = false;

  if (input < 0) {
    input = Math.abs(input);
    isNegative = true;
  }
  //convert number to array
  let output = `${input}`.split("").reverse().join("");

  // Find the index of the first non-zero character
  let nonZeroIndex = 0;
  while (output.charAt(nonZeroIndex) === "0") {
    nonZeroIndex++;
  }
  // Slice the string to remove leading zeros
  output = output.slice(nonZeroIndex);
  if (isNegative) {
    output = "-" + output;
  }
  return Number(output);
}
--- */
// reverseInt(597);

/* -- Method-2
function reverseInt(num) {
  let R,
    Q,
    reversed = "";

  if (num === 0) return 0;

  let numToTest;
  if (num < 0) {
    numToTest = -1 * num;
  } else {
    numToTest = num;
  }

  while (numToTest > 0) {
    R = numToTest % 10;
    Q = Math.floor(parseInt(numToTest / 10));
    reversed += R;
    numToTest = Q;
  }
  if (num < 0) {
    return -1 * parseInt(reversed);
  } else {
    return parseInt(reversed);
  }
}
--*/

/* --- Method-2 little compact
function reverseInt(num) {
  let reversed = 0;
  let isNegative = num < 0;

  // Convert negative number to positive for processing
  num = Math.abs(num);

  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  // Convert back to negative if original input was negative
  if (isNegative) {
    reversed *= -1;
  }

  return reversed;
}
--- */

function reverseInt(num) {
  const numStr = num.toString();
  const reverseStr = [...numStr].reverse().join("");
  const revInt = parseInt(reverseStr);

  if (num < 0) {
    return -1 * revInt;
  }

  return revInt;
}
module.exports = reverseInt;
