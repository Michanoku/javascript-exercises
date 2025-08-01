const reverseString = function(str) {
    // Split the string into the array
    const stringArray = str.split("");
    // Reverse the array
    stringArray.reverse();
    // Join the array into the string
    return stringArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
