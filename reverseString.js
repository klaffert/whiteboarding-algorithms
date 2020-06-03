// https://leetcode.com/problems/reverse-string/

// #1 Working Solution
var reverseString = function(s) {
    let reversed = s.reverse()
  return reversed
};

// Set pointer left at index 0 
// Set pointer right at index s.length - 1
// While left is less than right, move left pointer one step right
// and right pointer one step left

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
