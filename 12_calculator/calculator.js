// Passed
const add = function(a, b) {
	return a + b;
};

// Passed
const subtract = function(a, b) {
  return a - b;
};

// Passed
const sum = function(arr) {
	return arr.reduce((number, total) => total + number, 0);
};

// Passed
const multiply = function(arr) {
  return arr.reduce((number, total) => total * number, 1);
};

// Passed
const power = function(a, b) {
	return a**b;
};

// Passed
const factorial = function(a) {
    if (a === 0) {
      return 1;
    } else {
      let result = 1;
      for (i = 1; i <= a; i++) {
          result*= i;
      }
      return result;
    }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
