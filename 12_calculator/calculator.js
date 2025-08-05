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

const factorial = function(a) {
    const [start, end] = (a < 1) ? [a, 1] : [1, a];
    let sum = start;
    for (i = start + 1; i < end + 1; i++) {
        sum+= i;
    }
    return sum;
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
