// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/submissions/

var subtractProductAndSum = function(n) {
  // Set n to string
    stringToNumber = n.toString() 
  // Set product to 1, since we don't want to multiply by zero
    product = 1
  // Set sum to 0
    sum = 0
  // Create new array to push individual integers into
    output = []  
  // Loop through string and push each individual number into output variable
for (var i = 0; i < stringToNumber.length; i++) {
  // Push each integer into output
    output.push(+stringToNumber.charAt(i)); // [2, 3, 4]
  // Multiply each integer in the string together
    product *= output[i] // 24
  // Add each integer in the string together
    sum += output[i] // 9
} 
  // Return the difference
 return product - sum
};


// Set integer to string
// Split string into individual integers
// Multiply the individual integers
// Set into a variable
// Add the individual integers 
// Set into a variable
// Subtract var 2 from var 1
// Return the difference 
