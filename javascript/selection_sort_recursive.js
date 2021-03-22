
function selectionSortRecursive(arr) {
  if (arr.length === 0) {
    return [];
  }
  //todo: find the smallest value in the array.
  const min = Math.min(...arr);
  //todo: delete it from the old array.
  const idx = arr.indexOf(min);
  arr.splice(idx, 1);

  const result = selectionSortRecursive(arr);
  //todo: copy that into a new array,
  result.unshift(min);
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));
  console.log("");
  
  console.log("Expecting: [1, 2, 3, 4]");
  console.log("=>", selectionSortRecursive([1, 2, 3, 4]));
  console.log("");

  console.log("Expecting: [1, 2, 3, 4]");
  console.log("=>", selectionSortRecursive([2,3,4,1]));
  console.log("");

  console.log("Expecting: [-1, 3, 5, 10]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 10]));
  console.log("");

  console.log("Expecting: [-2, 2, 2, 3]");
  console.log("=>", selectionSortRecursive([2, -2, 3, 2]));
  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution

/* 
todo: find the smallest value in the array. 
todo: copy that into a new array, and delete it from the old array. 
?Iterative way of doing the selection sort. 
 const sorted = [];

  while (arr.length > 0) {
    const min = Math.min(...arr);
    const idx = arr.indexOf(min);

    sorted.push(min);
    arr.splice(idx, 1);
  }

  return sorted;


?Recursive thoughts


Use recursion to do repetitive actions. Copy and cut

Set a base case, since we are looping to the end of the array: length of the array === 0;


*/