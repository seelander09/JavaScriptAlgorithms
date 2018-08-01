// Selection Sort - O(log n^2)
// Parameter:
//  1. random array

// 1. Finds the smallest value in an array
const findSmallestIndex = (array) => {
    let smallestElement = array[0]; // Stores the smallest value
    let smallestIndex = 0; // Stores the index of the smallest value

    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallestElement) {
            smallestElement = array[i];
            smallestIndex = i;
            }
        }