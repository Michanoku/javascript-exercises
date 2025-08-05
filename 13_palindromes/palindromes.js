const palindromes = function (string) {
    // Split string to array
    let stringArr = string.split("");
    // Filter out all non alphabet characters after converting to lowercase
    const lowerArr = stringArr.filter(character => {
        const lowerCase = character.toLowerCase();
        const code = lowerCase.charCodeAt(0);
        return (code >= 97 && code <= 122);
    });
    // Create the reverse array
    const reverseArr = lowerArr.reverse();
    // Return true if arrays are the same 
    return lowerArr.join("") === reverseArr.join("");
};

// Do not edit below this line
module.exports = palindromes;
