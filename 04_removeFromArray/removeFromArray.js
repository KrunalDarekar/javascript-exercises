const removeFromArray = function(array) {
    let arrLen = array.length;
    let parameterLen = arguments.length;
    let returnArr = [];

    loop2 : for (let i = 0; i < arrLen; i++) {
        for (let j = 1; j < parameterLen; j++) {
            if (array[i] === arguments[j]) {
                continue loop2;
            }
        }
        returnArr.push(array[i]);
    }

    return returnArr;
};

// Do not edit below this line
module.exports = removeFromArray;
