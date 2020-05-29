https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // Remove all spaces from string
   let noSpaces = s.replace(/\W/g, '');
  // Take new string and split it into indv. chars, reverse it and then join it all together
   let backwards = noSpaces.split('').reverse().join('')
   console.log(noSpaces)
  console.log(backwards)
  // Check to see if noSpaces is equal to the backwards string and make them both lowercase
  return noSpaces.toLowerCase() == backwards.toLowerCase()
};
