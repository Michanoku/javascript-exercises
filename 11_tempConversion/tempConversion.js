const convertToCelsius = function(temp) {
  // Convert to Celsius
  const result = (temp - 32) * (5/9); 
  // Round and return
  return Math.round(result * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  // Convert to Fahrenheit
  result = temp * (9/5) + 32; 
  // Round and return
  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
