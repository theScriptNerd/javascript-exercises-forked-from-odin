const convertToCelsius = function(fahrenheit) {
  return Math.round(((fahrenheit - 32) * 5 / 9) * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  return Math.round((celsius * 9 / 5 + 32) * 10) / 10;
};

// // Function to convert Fahrenheit to Celsius
// function convertToCelsius(fahrenheit) {
//   const celsius = (fahrenheit - 32) * 5 / 9;
//   return parseFloat(celsius.toFixed(1));
// }

// // Function to convert Celsius to Fahrenheit
// function convertToFahrenheit(celsius) {
//   const fahrenheit = (celsius * 9 / 5) + 32;
//   return parseFloat(fahrenheit.toFixed(1));
// }


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
