//https://leetcode.com/problems/length-of-last-word/submissions/

// Set counter
// Cut whitespace in string
// Loop through string length, traversing backwards while the string.length is greater than 0
// Once you hit a ' ', break out of loop
// Count +1 each loop through
// Return count

var lengthOfLastWord = function(s) {
    var count = 0;
  
  // remove whitespace from both sides of a string
    s = s.trim();
  // set i as the string length - 1 (tranverse string backwards) while it is greater than 0, 
    for (var i = s.length - 1; i >= 0; -- i) {
  // if you hit a space, break out of loop
        if(s[i] === ' ') {
            break;
        }
  // count 1 for each loop through successful
        count++;
    }
    
    return count;
};
