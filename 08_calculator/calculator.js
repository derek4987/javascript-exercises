const add = function(a, b) {
	if (a === NaN) { return 0;}
  let total = a + b;
  return total;
};

const subtract = function(a, b) {
  	let total = a - b;
    return total;
};

const sum = function(array) {
  const toAdd = array
  let total = 0;
  if (toAdd === []) { total = 0; };
  for (i = 0; i < toAdd.length; i++) {
    total = total + toAdd[i];
  }
  return total;
};

const multiply = function(array) {
  let total = 1;
  if (array === []) { total = 0; };
  for (i = 0; i < array.length; i++) {
    total = total * array[i];
  }
  return total;
};

const power = function(number, power) {
  let total = number ** power;
  return total;
};

const factorial = function(number) {
  let total = 1;
  if (number === 0) { return 1 };
  for (i = number; i > 0; i--) {
    total = total * i;
  }
  return total;
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
