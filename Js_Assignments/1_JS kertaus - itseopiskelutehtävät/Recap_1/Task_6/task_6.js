'use strict';

const n = Number(prompt('Enter a positive integer:'));

if (isNaN(n) || n <= 0) {
  document.querySelector('#result').textContent = 'Invalid input!';
} else {
  let table = 'Multiplication Table:\n';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      table += i * j + ' ';
    }
    table += '\n';
  }
  document.querySelector('#result').innerHTML = '<pre>' + table + '</pre>';
}
