/*
Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, a>

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into >
We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/

function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, '');
      // debug: console.log(str);
  for(var i = 0, len = str.length - 1; i < len/2; i++) {
      // debug: console.log(str[i], i);
    if(str[i] !== str[len-i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome("A man, a plan, a canal. Panama"));
