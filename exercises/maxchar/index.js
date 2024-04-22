// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  if (str.length === 0) return;

  let obj = {};
  for (let char of str) {
    if (!obj[char]) {
      // if the character is not already the key of the object
      obj[char] = 1; // then set the value for this object's key to 1
    } else {
      obj[char] = obj[char] + 1;
    }
  }

  // Let's iterate over the object with unique keys with a number count as value
  let maxCount = 0;
  let maxChar = "";
  for (let key in obj) {
    if (obj[key] > maxCount) {
      maxCount = obj[key];
      maxChar = key;
    }
  }

  return maxChar;
}

module.exports = maxChar;
