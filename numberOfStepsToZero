// Based on https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

var numberOfSteps  = function(num) {
  // Set variable to be number
  // Set counter to 0 
    let number = num
    let counter = 0;
  
  // Loop through number while it's greater than 0
  while (number > 0) {
    // If number is even, divide it by two and and assign the result to var number
    if (number % 2 == 0) {
      number /= 2
    // If number is odd, subtract it by one and assign the result to var number
    } else {
      number -=1
    }
    // increase count with each loop through
    counter++
  }
  // return counter once number = 0 
  return counter
}
  
   

// Set counter to 0
// Take the input and see if it is even or odd
// If even, divide by 2 -> return result and +1 to counter
// If odd, subtract 1 -> return result and +1 to counter
// Loop through above until num == 0 
