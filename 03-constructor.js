/*
Constructor Invocation
  - When you prefix `new` when invoking a function
  - `this` is bound to the new object
*/

var StudentLoan = function(currentBalance) {
  this.currentBalance = currentBalance;
};

StudentLoan.prototype.pay = function (amount) {
  this.currentBalance -= amount;
};

StudentLoan.prototype.getBalance = function () {
  return this.currentBalance;
};

var myStudentLoan = new StudentLoan(1000000000);
console.log(myStudentLoan.getBalance());
myStudentLoan.pay(999999999);
console.log(myStudentLoan.getBalance());
