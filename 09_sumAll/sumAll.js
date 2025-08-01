const sumAll = function(a, b) {
    // Check if both values are valid integers
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0 ) {
        return "ERROR"
    } else {
        // Find start and end by comparing which value is bigger
        const [start, end] = (a < b) ? [a, b] : [b, a];
        // Set the initial sum to the starting value
        let sum = start;
        for (i = start + 1; i < end + 1; i++) {
            sum+= i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
