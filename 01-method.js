/*
Method Invocation
  - When a function is a property of an object
  - `this` is bound to the object
*/

var studentLoans = {
  currentBalance: 1000000000,
  pay: function(amount) {
    this.currentBalance -= amount;
    return this.currentBalance;
  },
  getBalance: function() {
    return this.currentBalance;
  }
};

console.log(studentLoans.getBalance());
studentLoans.pay(999999999);
console.log(studentLoans.getBalance());