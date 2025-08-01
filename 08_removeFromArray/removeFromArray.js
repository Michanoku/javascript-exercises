const removeFromArray = function() {
    // Get First Argument, which is the Array
    let array = arguments[0]
    // Loop over the rest of the arguments, which need to be removed from the array
    for (i = 1; i < arguments.length; i++) {
        // Filter the argument out and overwrite the array
        array = array.filter(item => item !== arguments[i]);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
