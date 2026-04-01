'use strict';

let a = parseFloat(prompt('Enter the first side of the triangle:'));
let b = parseFloat(prompt('Enter the second side of the triangle:'));
let c = parseFloat(prompt('Enter the third side of the triangle:'));

let triangleType;

if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
  triangleType = 'Invalid input!';
} else if (!(a + b > c && a + c > b && b + c > a)) {
  triangleType = 'Not a valid triangle!';
} else if (a === b && b === c) {
  triangleType = 'Equilateral triangle';
} else if (a === b || a === c || b === c) {
  triangleType = 'Isosceles triangle';
} else {
  triangleType = 'Scalene triangle';
}

document.querySelector('#result').textContent = `Triangle: ${triangleType}`;
