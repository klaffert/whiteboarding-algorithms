https://leetcode.com/problems/valid-anagram/

// Split s and t into individual chars
// Sort each string alphabetically
// while s.length && t.length are true (have elements)
// if if the last element in s is not the same last element in t, return false  (not an anagram)
// break out of loop 
// return false if s.length || t.length < 1, else return true                                         

var isAnagram = function(s, t) {
  const stringS = s.split('').sort(),
        stringT = t.split('').sort();
    while (stringS.length && stringT.length) {
        if (stringS.pop() !== stringT.pop()) {
            return false;
        }
    }
    return stringS.length || stringT.length ? false : true;
};
