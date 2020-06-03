https://leetcode.com/problems/move-zeroes/

// Set a counter for the zeroes at 0
// Loop through nums 
// If element in index is 0, add 1 to counter
// Else if counter > 0 
// set a variable that will hold the number that is not 0 
// Move that variable to index 0 

var moveZeroes = function(nums) {
    let countZeroes = 0
    for (let i = 0; i < nums.length; i++) {
      if(nums[i] === 0) {
        countZeroes++
      } else if (countZeroes > 0) {
        let temp = 
        nums[i] = 
        nums[i - countZeroes] = temp
      }
    }
};
