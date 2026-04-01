function sortArray(numbers, order) {
  let sortedArray = [...numbers];

  if (order === 'asc') {
    sortedArray.sort(function (a, b) {
      return a - b;
    });
  } else if (order === 'desc') {
    sortedArray.sort(function (a, b) {
      return b - a;
    });
  } else {
    console.log("Invalid order! Use 'asc' or 'desc'.");
    return [];
  }

  return sortedArray;
}

const numbers = [5, 2, 8, 1, 9];

console.log('Ascending:', sortArray(numbers, 'asc'));
console.log('Descending:', sortArray(numbers, 'desc'));
console.log('Another Test ASC:', sortArray([10, 3, 6, 1], 'asc'));
console.log('Another Test DESC:', sortArray([10, 3, 6, 1], 'desc'));
