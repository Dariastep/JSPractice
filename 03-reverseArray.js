/**
 * Task description: Write a method that reverts input array
 * Expected Result: [1, 2, 3] => [3, 2, 1]
 * Task Complexity: 1 of 5
 * @param {Array} array - Array of any elements
 * @returns {Array}
 */
function reverseArr(arr1) {
    let i = 0;
    let j = arr1.length - 1;
    while (i < j) {
    [arr1[i], arr1[j]] = [arr1[j], arr1[i]];   // 1 2 3 4   // 4 2 3 1
    i++; // 4 3 2 1 
    j--;  
    }
    return arr1;
    }
    console.log(reverseArr([1,2,3]));
    