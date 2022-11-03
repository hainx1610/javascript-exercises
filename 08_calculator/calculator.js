const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((result, number) => result + number, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((result, number) => result *= number, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	let result = 1;
  if (n >= 1) {
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
  }
  return result;
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
