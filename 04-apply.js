/*
Apply Invocation
  - Functions can have other methods - e.g, `apply`
  - `apply` takes two argumens
    1. the value that should be bound to `this`
    2. an array of parameters
*/

var sum = function(a, b) {
  return a + b + this.newValues[0] + this.newValues[1];
};


var parameterArray = [5, 4];
var values = {
  newValues: [1, 2]
};

console.log(sum.apply(values, parameterArray));