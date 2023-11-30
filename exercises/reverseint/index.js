// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

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
}

reverseInt(597);

module.exports = reverseInt;
