const reverseString = function(string) {
    let strLength = string.length;
    let returnStr = '';

    for (let i = strLength-1; i >= 0; i--) {
        returnStr += string[i];
    }

    return returnStr;
};

// Do not edit below this line
module.exports = reverseString;
