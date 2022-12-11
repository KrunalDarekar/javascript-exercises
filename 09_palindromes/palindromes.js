const palindromes = function (string) {
 const newString = string.toUpperCase().replace(/[^A-Z]/g, "");
 for(let i = 0; i < newString.length/2; i++) {
    if(newString[i] === newString[newString.length - 1 - i]){
        continue;
    } else {
        return false;
    }
 }
 return true;
};

// Do not edit below this line
module.exports = palindromes;
