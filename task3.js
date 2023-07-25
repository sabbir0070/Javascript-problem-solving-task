function findMostFrequentElement(arr) {
    const frequencyMap = {};
    let mostFrequentElement;
    let maxFrequency = 0;

    for (const num of arr) {
        if (frequencyMap[num]) {
            frequencyMap[num]++;
        } else {
            frequencyMap[num] = 1;
        }

        if (frequencyMap[num] > maxFrequency) {
            maxFrequency = frequencyMap[num];
            mostFrequentElement = num;
        }
    }

    return mostFrequentElement;
}

// Test the function
const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const mostFrequent = findMostFrequentElement(inputArray);
console.log(mostFrequent);