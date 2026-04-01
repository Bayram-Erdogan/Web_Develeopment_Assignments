let numbers = [];

for (let i = 1; i <= 5; i++) {
  let input = prompt('Enter Number ' + i + ':');
  let num = Number(input); // convert to number
  numbers.push(num);
}

console.log('Numbers:', numbers);

let searchInput = prompt('Enter a Number to Search:');
let searchNumber = Number(searchInput);

if (numbers.includes(searchNumber)) {
  console.log('Number ' + searchNumber + ' is found in the array.');
} else {
  console.log('Number ' + searchNumber + ' is NOT found in the array.');
}

numbers.pop();

console.log('Updated Numbers:', numbers);

numbers.sort(function (a, b) {
  return a - b;
});

console.log('Sorted Numbers:', numbers);
