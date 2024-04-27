/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let n = numbers.length;

    for (let i = 0; i < n; i++) 
    {     
          const element = [];
          if (i < n) {
               element += numbers[i]
          } else 
          {
               return i ;
          }
    }
}

module.exports = findLargestElement;
