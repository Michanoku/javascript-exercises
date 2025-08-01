const sumAll = function(a, b) {
    // Initialize the sum
    let sum = a;
    // Use the counter for iteration
    for (i = a + 1; i < b + 1; i++) {
        sum+= i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
