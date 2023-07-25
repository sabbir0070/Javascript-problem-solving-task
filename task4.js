function findTwoNumbersWithSum(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;

    while (left < right) {
        const sum = sortedArray[left] + sortedArray[right];

        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return null; // If no such pair is found, return null.
}

// Test the function
const inputArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const indices = findTwoNumbersWithSum(inputArray, targetValue);
console.log(indices); // Output: [1, 2] (as inputArray[1] + inputArray[2] = 3 + 6 = 9)
