// https://leetcode.com/problems/remove-element/

// Loop thorugh array nums and see if nums[i]== val
// if nums[i] = val, remove that element from array and 
// decrement the index variable so it does not skip the next item in the array.
// else return nums.length


var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++) {
      if(nums[i] === val) {
        nums.splice(i, 1);
        i--;
      }}
    return nums.length
};
