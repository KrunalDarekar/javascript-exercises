const fibonacci = function(n) {
    if(n < 0) {
        return "OOPS";
    }

    let first = 1;
    let second = 1;
    let next = first + second;
    for(let i = 0; i < n-1; i++) {
        first = second;
        second = next;
        next = first + second;
    }
    return first;
};

// Do not edit below this line
module.exports = fibonacci;
