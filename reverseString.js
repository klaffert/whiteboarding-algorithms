// https://leetcode.com/problems/reverse-string/

// #1 Working Solution
var reverseString = function(s) {
    let reversed = s.reverse()
  return reversed
};

// #2 Working Solution
var reverseString = function(s) {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    [s[left], s[right]]  = [s[right], s[left]]
    left++
    right--
  }
};
