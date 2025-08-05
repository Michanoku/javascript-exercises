const palindromes = function (string) {
    // Split string to array
    let stringArr = string.split("");
    // Filter out all non alphabet characters after converting to lowercase
    const lowerArr = stringArr.map(character => character.toLowerCase());
    const alphanumericArr = lowerArr.filter(character => {
        const code = character.charCodeAt(0);
        return ((code >= 97 && code <= 122) || (code >= 48 && code <= 57));
    });
    // Create the reverse array
    const reverseArr = alphanumericArr.toReversed();
    // Return true if arrays are the same 
    return alphanumericArr.join("") === reverseArr.join("");
};

// Do not edit below this line
module.exports = palindromes;
