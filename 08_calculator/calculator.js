const add = function(...addition) {
	return addition.reduce((acc,num) => acc + num);
};

const subtract = function(...subtraction) {
	return subtraction.reduce((acc,num) => acc - num);
};

const sum = function(array) {
  return array.reduce((acc,num) => acc + num, 0);
};

const multiply = function(...multiplies) {
  return multiplies.reduce((acc,num) => acc * num);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  let factor = 1;
  if (a === 0) return 1;
  for(i = a; i > 0; i--){
    factor *= i;
  } return factor;
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
