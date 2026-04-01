'use strict';

const temperature = prompt('Enter the temperature in Celsius.');

const convertedTemperature = parseFloat(temperature);

const fahrenheit = (convertedTemperature * 9) / 5 + 32;

const kelvin = convertedTemperature + 273.15;

document.querySelector('#result').textContent =
  `Temperature in Fahrenheit: ${fahrenheit.toFixed(2)} °F, Temperature in Kelvin: ${kelvin.toFixed(2)} K.`;
