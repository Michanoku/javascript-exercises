const repeatString = function(str, count) {
    if (count < 0) {
        return "ERROR";
    }
    const stringArray = [];
    for (i = 0; i < count; i++) {
        stringArray.push(str);
    }
    return stringArray.join("");
};

// Do not edit below this line
module.exports = repeatString;
