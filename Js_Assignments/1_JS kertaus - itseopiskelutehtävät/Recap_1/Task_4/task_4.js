'use strict';

const grade = prompt('Enter your grade (0-100).');

const convertedGrade = parseFloat(grade);

let letterGrade;
if (convertedGrade < 0 || convertedGrade > 100 || isNaN(convertedGrade)) {
  letterGrade = 'Invalid grade. Please enter a number between 0 and 100.';
} else if (convertedGrade >= 88) {
  letterGrade = '5';
} else if (convertedGrade >= 76) {
  letterGrade = '4';
} else if (convertedGrade >= 64) {
  letterGrade = '3';
} else if (convertedGrade >= 52) {
  letterGrade = '2';
} else if (convertedGrade >= 40) {
  letterGrade = '1';
} else {
  letterGrade = '0';
}

document.querySelector('#result').textContent =
  `Your letter grade is: ${letterGrade}.`;
