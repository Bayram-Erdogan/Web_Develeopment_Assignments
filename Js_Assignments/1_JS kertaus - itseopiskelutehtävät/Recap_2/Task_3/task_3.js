let numbers = [];

while (true) {
  let input = prompt("Enter a number (or 'done' to finish):");

  if (input.toLowerCase() === 'done') {
    break;
  }

  let num = Number(input);

  if (!isNaN(num)) {
    numbers.push(num);
  } else {
    alert('Please enter a valid number!');
  }
}

let evenNumbers = [];

for (let num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}

let resultElement = document.getElementById('result');

if (evenNumbers.length > 0) {
  resultElement.textContent = 'Even Numbers: ' + evenNumbers.join(', ');
} else {
  resultElement.textContent = 'Even Numbers: None';
}

console.log('Program finished.');
