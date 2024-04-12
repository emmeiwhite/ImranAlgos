// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/* --- Method-1
function palindrome(str) {
  let reverse = [...str].reduce((acc, curr) => {
    return (acc = curr + acc);
  }, "");

  if (reverse === str) {
    return true;
  } else {
    return false;
  }
}

--- */

/* --- Method-2
function palindrome(str) {
  const reverse = Array.from(str).reverse().join("");
  if (reverse === str) {
    return true;
  } else {
    return false;
  }
}
--- */

/* --- Method-3 
function palindrome(str) {
  let reverse = "";
  for (let ch of str) {
    reverse = ch + reverse;
  }
  return str === reverse;
}
--- */

/* --- Method-4 (Traditional - Language Independent) --- */

function palindrome(str) {
  let strArr = [...str];

  const length = strArr.length;

  let loopUntil = Math.floor(length / 2); // We are looping these number of times only

  let isPalindrome = true;
  for (let i = 0; i < loopUntil; i++) {
    debugger;
    if (strArr[i] === strArr[length - i - 1]) {
      debugger;
    } else {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
}

palindrome("abbaba");

module.exports = palindrome;
