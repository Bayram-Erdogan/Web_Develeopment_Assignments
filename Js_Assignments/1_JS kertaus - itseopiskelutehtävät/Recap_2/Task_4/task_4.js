function sortArray(arr) {
  let sortedArray = [...arr];

  sortedArray.sort(function (a, b) {
    return a - b;
  });

  return sortedArray;
}

let numbers = [10, 5, 7, 3, 9];

console.log('Original Array:', numbers);

let sortedNumbers = sortArray(numbers);

console.log('Sorted Array:', sortedNumbers);
