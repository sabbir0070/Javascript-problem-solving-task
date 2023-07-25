function findSecondSmallest(arr) {
  if (arr.length < 2) {
    throw new Error("Array should contain at least two elements");
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }

  if (secondSmallest === Infinity) {
    throw new Error("All elements in the array are the same");
  }

  return secondSmallest;
}


const numbers = [10, 5, 8, 2, 7, 3, 9];
console.log(findSecondSmallest(numbers)); // Output: 3