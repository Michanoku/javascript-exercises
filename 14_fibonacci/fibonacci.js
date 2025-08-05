const fibonacci = function(parameter) {
    const number = parseInt(parameter);
    if (number < 0 ) {
        return "OOPS";
    }
    if (number <= 1) {
        return number;
    } else { 
        return fibonacci(number - 1) + fibonacci(number - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
