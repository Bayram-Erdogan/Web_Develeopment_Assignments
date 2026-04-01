'use strict';

let point1 = prompt('Enter the coordinates of the first point (x,y).');
let point2 = prompt('Enter the coordinates of the second point (x,y).');

let [x1, y1] = point1.split(',').map(Number);
let [x2, y2] = point2.split(',').map(Number);

let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

document.querySelector('#result').textContent =
  `The distance between the two points is: ${distance.toFixed(2)}.`;
