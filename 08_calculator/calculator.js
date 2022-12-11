const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let sum = 0;
  for(let i = 0; i < array.length; i++) {
   sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let product = 1;
  for(let i = 0; i < array.length; i++) {
   product *= array[i];
  }
  return product;
};

const power = function(a, b) {
	let ans = 1;
  for(let i = 0; i < b; i++) {
    ans *= a;
  }
  return ans;
};

const factorial = function(a) {
	let fact = 1;
  for(let i = 2; i <= a; i++) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
