'use strict';

const num = prompt(
  'Enter a number to calculate the sum of all numbers from 1 to that number.'
);

const convertedNum = parseInt(num);

let sum = 0;

if (isNaN(convertedNum) || convertedNum < 0) {
  document.querySelector('#result').textContent =
    'Please enter a valid positive integer.';
} else {
  for (let i = 1; i <= convertedNum; i++) {
    sum += i;
  }
  document.querySelector('#result').textContent =
    `The sum of all numbers from 1 to ${convertedNum} is: ${sum}.`;
}
